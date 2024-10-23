"use client";

import { useState } from "react";

interface Wallet {
  balance: number;
  totalEarnings: number;
  walletCreated: boolean;
}

const WalletPage = () => {
  const [wallet, setWallet] = useState<Wallet>({
    balance: 0,
    totalEarnings: 0,
    walletCreated: false,
  });

  const [withdrawAmount, setWithdrawAmount] = useState<number>(0);
  const [message, setMessage] = useState<string | null>(null);

  const handleCreateWallet = () => {
    setWallet({ balance: 0, totalEarnings: 0, walletCreated: true });
    setMessage("Wallet account created successfully!");
  };

  const handleWithdraw = () => {
    if (withdrawAmount > wallet.balance) {
      setMessage("Insufficient balance.");
      return;
    }

    setWallet((prev) => ({
      ...prev,
      balance: prev.balance - withdrawAmount,
    }));
    setMessage(`Withdrawal of GHS ${withdrawAmount} successful!`);
  };

  return (
    <div className="min-h-screen bg-[#002b5b] text-white flex items-center justify-center p-8">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg text-black">
        <h1 className="text-3xl font-bold text-center mb-6">My Wallet</h1>

        {!wallet.walletCreated ? (
          <div className="text-center">
            <p className="text-lg mb-4">You haven't created a wallet yet.</p>
            <button
              onClick={handleCreateWallet}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Create Wallet
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Wallet Overview */}
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
              <div>
                <h2 className="text-xl font-bold">Total Earnings</h2>
                <p className="text-2xl">GHS {wallet.totalEarnings}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold">Available Balance</h2>
                <p className="text-2xl">GHS {wallet.balance}</p>
              </div>
            </div>

            {/* Withdraw Section */}
            <div>
              <h2 className="text-xl font-bold mb-2">Withdraw Funds</h2>
              <input
                type="number"
                placeholder="Enter amount to withdraw"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(Number(e.target.value))}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              />
              <button
                onClick={handleWithdraw}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Withdraw
              </button>
            </div>

            {/* Display Messages */}
            {message && (
              <div className="mt-4 p-3 bg-blue-100 text-blue-700 rounded-lg">
                {message}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletPage;
