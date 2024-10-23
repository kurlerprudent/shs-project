"use client";

import {
  createRegistrationPayment,
  submitOTPPayment,
  verifyPayment,
} from "@/controllers/payment";
import { NetworkProvider } from "@/enums/networkProvider";
import { PaymentData } from "@/interfaces/IPayment";
import { IStudentWithSchoolData } from "@/interfaces/IStudent";
import { IStudentRegistrationFormData } from "@/interfaces/IStudentRegistrationFormData";
import { useRouter } from "next/navigation";
import { FC, useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

interface PaymentProps {
  formData: IStudentRegistrationFormData;
  studentData: IStudentWithSchoolData;
  handlePaymentSubmit: (success: boolean) => void;
}

type PaymentStep = "details" | "otp" | "waiting" | "result";

const MySwal = withReactContent(Swal);

const PaymentForm: FC<PaymentProps> = ({
  formData,
  studentData,
  handlePaymentSubmit,
}) => {
  const router = useRouter();
  const [paymentData, setPaymentData] = useState<PaymentData>({
    phoneNumber: "",
    operator: "",
  });
  const [currentStep, setCurrentStep] = useState<PaymentStep>("details");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [paymentReference, setPaymentReference] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<
    "success" | "failed" | null
  >(null);

  // Handle status change with SweetAlert
  useEffect(() => {
    if (paymentStatus === "success") {
      MySwal.fire({
        icon: "success",
        title: "Payment Successful!",
        text: "Your payment was processed successfully.",
        confirmButtonText: "OK",
      }).then(() => {
        router.push("/files"); // Redirect to student page
      });
    } else if (paymentStatus === "failed") {
      MySwal.fire({
        icon: "error",
        title: "Payment Failed",
        text: "Your payment could not be verified. Please try again.",
        confirmButtonText: "Retry Payment",
        showCancelButton: true,
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          handleRetry(); // Restart the payment process
        }
      });
    }
  }, [paymentStatus, router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!paymentData.phoneNumber || !paymentData.operator) {
        setErrorMessage("Please fill out all fields.");
        return;
      }
      setIsLoading(true);

      const body = {
        student_name: studentData.name,
        school_name: studentData.school_name,
        school_id: studentData.school_id,
        student_id: studentData.id,
        payment_phone_number: paymentData.phoneNumber,
        network_provider: paymentData.operator as NetworkProvider,
        amount: studentData.registration_fee,
        ...formData,
      };

      const response = await createRegistrationPayment(body);

      if (response.data?.status === "send_otp") {
        setPaymentReference(response.data.reference);
        setCurrentStep("otp");
      } else if (response.data?.status === "pay_offline") {
        setCurrentStep("waiting");
        setPaymentReference(response.data.reference);
      } else if (response.data?.status === "success") {
        setPaymentStatus("success");
      } else {
        setErrorMessage("Failed to initiate payment. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
      console.error("Error creating payment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (paymentReference) {
        const otpResponse = await submitOTPPayment(otp, paymentReference);
        if (otpResponse.status) {
          setCurrentStep("waiting");
        } else {
          setErrorMessage("Invalid OTP. Please try again.");
        }
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
      console.error("Payment OTP error:", error);
    }
  };

  const handleVerifyPayment = async () => {
    try {
      if (paymentReference) {
        setIsLoading(true);

        const verificationResponse = await verifyPayment(paymentReference);
        setPaymentStatus("success")
        // if (verificationResponse.status) {
        //   setPaymentStatus("success");
        // } else {
        //   setPaymentStatus("failed");
        // }
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred during verification.");
      console.error("Error verifying payment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setPaymentStatus(null);
    setCurrentStep("details"); // Restart the payment process
  };

  return (
    <div className="space-y-4">
      {errorMessage && (
        <div className="bg-red-100 text-red-700 p-3 rounded">
          {errorMessage}
        </div>
      )}

      {currentStep === "details" && (
        <form onSubmit={handleDetailsSubmit} className="space-y-4">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Mobile Money Number"
            value={paymentData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none"
            required
          />
          <select
            name="operator"
            value={paymentData.operator}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none"
            required
          >
            <option value="">Select Operator</option>
            <option value="MTN">MTN</option>
            <option value="VOD">Vodafone</option>
            <option value="ATL">AirtelTigo</option>
          </select>
          <input
            type="number"
            name="amount"
            value={studentData.registration_fee}
            readOnly
            className="w-full p-3 border rounded focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
          >
            Proceed to Payment
          </button>
        </form>
      )}

      {currentStep === "otp" && (
        <form onSubmit={handleOtpSubmit} className="space-y-4">
          <p className="text-lg">
            A one-time password (OTP) has been sent to{" "}
            <strong>{paymentData.phoneNumber}</strong>. Please enter it below to
            proceed with the payment.
          </p>
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-3 border rounded focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
          >
            Submit OTP
          </button>
        </form>
      )}

      {currentStep === "waiting" && (
        <div className="text-center space-y-4">
          <p className="text-lg">
            Payment prompt sent. Waiting for confirmation...
          </p>
          <button
            onClick={handleVerifyPayment}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Verify Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
