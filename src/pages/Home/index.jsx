import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { HomeWrapper, MainContent, UserDetails } from "./styles";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { getUserData } from "../../services/api";
import { AnimatePresence, motion } from "framer-motion";

export default function Home({ isTokenValid, doesTokenExistsOnLocalStorage }) {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("@kenziehub:userId");
    try {
      getUserData(userId).then((response) => {
        if (response.request.status !== 200) {
          throw response;
        }
        setUserInfo(response.data);
      });
    } catch (error) {
      toast.error("Error ao carregar informações do usuário.", {
        position: "bottom-right",
      });
      console.error(error);
    }
  }, []);

  if (doesTokenExistsOnLocalStorage() === false || isTokenValid() === false) {
    toast.info("Autentique-se para acessar o dashboard.");
    return <Navigate to="/login" replace={true} />;
  }

  const animationVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const animationChild = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <HomeWrapper>
          <motion.div variants={animationChild}>
            <Header />
          </motion.div>
          <motion.div variants={animationChild}>
            <UserDetails>
              <h2>Olá, {userInfo ? userInfo.name : "Usuário"}</h2>
              <p>{userInfo.course_module}</p>
            </UserDetails>
          </motion.div>
          <motion.div variants={animationChild}>
            <MainContent>
              <h2>Que pena! Estamos em desenvolvimento :(</h2>
              <p>
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades 👀
              </p>
            </MainContent>
          </motion.div>
        </HomeWrapper>
      </motion.div>
    </AnimatePresence>
  );
}
