import Link from "next/link"



const Footer = () => {
  return (
   
    
    
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-between p-5">
           
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <h2 className="text-lg font-bold mb-2">BUYGET ICT HUB in partnership  with  QuiverTech</h2>
                <p className="text-sm">With years of experience, Peskab has built a reputation for excellence, precision, and customer satisfaction.</p>
            </div>
           
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <h2 className="text-lg font-bold mb-2">Useful Links</h2>
                <ul className="text-sm">
                    <li><Link href="#" className="hover:underline">Home</Link></li>
                    <li><Link href="#" className="hover:underline">Amission</Link></li>
                    <li><Link href="#" className="hover:underline">News&Activities</Link></li>
                    
                </ul>
            </div>
           
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <h2 className="text-lg font-bold mb-2">Socials</h2>
                <ul className="text-sm">
                    <li><Link href="#" className="hover:underline">Facebook</Link></li>
                    <li><Link href="#" className="hover:underline">Whatsapp</Link></li>
                    <li><Link href="#" className="hover:underline">Snapchat</Link></li>
                    <li><Link href="#" className="hover:underline">Telegram</Link></li>
                </ul>
            </div>
           

            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <h2 className="text-lg font-bold mb-2">Contact Us</h2>
                <p className="text-sm"><i className="fas fa-phone"></i> +233 24 317 2205</p>
                <p className="text-sm"><i className="fas fa-phone"></i> +233 50 549 1381</p>
                <p className="text-sm"><i className="fas fa-envelope"></i> annorbenk24@gmail.com</p>
                <button className="mt-4 bg-yellow-500 text-gray-800 py-2 px-4 rounded">Contact Us</button>
            </div>
        </div>
        <div className="container mx-auto text-center text-sm mt-8">
            <p>&copy; 2024 BUYGET ICT HUB in partnership  with  QuiverTech. All rights reserved.</p>
            <p>Powered by QuiverTech. Designed by JNA.</p>
        </div>
    </footer>

    
  )
}

export default Footer