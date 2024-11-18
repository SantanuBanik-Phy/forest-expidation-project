import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    
    const titles = {
      "/": "Home - Eco-Adventure ",
      "/auth/login": "Login - Eco-Adventure ",
      "/auth/register": "Register - Eco-Adventure ",
      "/Profile": "My Profile - Eco-Adventure",
      "/updateProfile": "Update Profile - Eco-Adventure ",
      "//adventure/:id": "Adventure Experiences - Eco-Adventure",
      "/404": "Page Not Found - Eco-Adventure ",
    };

    
    const defaultTitle = "Eco-Adventure";

   
    document.title = titles[pathname] || defaultTitle;
  }, [location]); 
};

export default DynamicTitle;
