import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Header from "../../components/Header";
import Techs from "../../components/Techs";
import { HomeWrapper, MainContent, UserDetails } from "./styles";

import { UserContext } from "../../providers/User";
import AddModal from "../../components/AddModal";
import { TechContext } from "../../providers/Tech";
import Loader from "../../components/Loader";
import EditModal from "../../components/EditModal";

export default function Home() {
  const { userInfo, isLoading } = useContext(UserContext);
  const { showCreateModal, showEditModal } = useContext(TechContext);

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
    <>
      {isLoading && <Loader />}
      <AnimatePresence>
        <motion.div variants={animationVariants} initial="hidden" animate="show" exit="hidden">
          <HomeWrapper>
            <AnimatePresence>
              {showCreateModal && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                  <AddModal />
                </motion.div>
              )}
              {showEditModal && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                  <EditModal />
                </motion.div>
              )}
            </AnimatePresence>
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
                {userInfo.techs ? (
                  <Techs />
                ) : (
                  <>
                    <h2>Carregando... 😴</h2>
                    <p>Estamos buscando seus dados!</p>
                  </>
                )}
              </MainContent>
            </motion.div>
          </HomeWrapper>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
