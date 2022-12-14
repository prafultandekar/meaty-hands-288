import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Login from "../Modal/Login";
import About from "./About";
import Advertising from "./Advertising";
import Contactus from "./Contactus";
import Help from "./Help";
import HelpMerchant from "./HelpMerchant";
import Home from "./Home";
import HotPicks from "./HotPicks";
import KindMoments from "./KindMoments"
import MealDeal from "./MealDeal";
import Recipes from "./Recipes";
import Signup from "./Signup";
import Superhero from "./Superhero";
import Navbar from "../Components/Navbar";
import Logout from "./Logout";
import Article  from "./Articles";
import Directory from "./Directory";
import Footer from "../Components/Footer"

const MainRoute = () => {
  const location = useLocation();

  if (location.pathname === "*" || "/*" || "/not") {
    document.title = "Page Not Found";
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mealdeal" element={<MealDeal />} />
        <Route path="/kindmoments" element={<KindMoments/>} />
        <Route path="/hotpicks" element={<HotPicks />}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>
        <Route path="/articles" element={<Article />}></Route>
        <Route path="/directory" element={<Directory />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/help_merchant" element={<HelpMerchant />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/advertising" element={<Advertising />} />
        <Route path="/superhero" element={<Superhero />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="*"
          element={
            <Flex flexDirection="column" align="center" justify="center">
              <Text fontSize="xl" textAlign="center">
                Page Not Found . . . .
              </Text>
              <Link to="/">
                <Button bg="transparent" mt="5px">
                  Click On Go Back
                </Button>
              </Link>
            </Flex>
          }
        />
      </Routes>
    <Footer/>
    </div>
  );
};

export default MainRoute;
