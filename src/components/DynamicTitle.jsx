import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    
    const titles = {
      "/": "Home - Forest Expeditions ",
      "/auth/login": "Login -Forest Expeditions ",
      "/auth/register": "Register -Forest Expeditions ",
      "/Profile": "My Profile -Forest Expeditions",
      "/updateProfile": "Update Profile - Forest Expeditions ",
      "//adventure": "Adventure Experiences - Forest Expeditions",
      "/404": "Page Not Found -Forest Expeditions ",
      "/aboutUs": "About Us - Forest Expeditions",
      "/forgetPassword": "Forget Password - Forest Expeditions",

      
    };

    
    const defaultTitle = "Forest Expeditions";

   
    document.title = titles[pathname] || defaultTitle;
  }, [location]); 
};

export default DynamicTitle;
