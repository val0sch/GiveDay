import React, { useContext, useState, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import api from "@services/api";
import Layout from "@components/Layout";
import NewArticle from "@components/Article/NewArticle";
import Newsletter from "../../components/Newsletter/Newsletter";
import post2 from "../../assets/images/post2.gif";
import blog2 from "../../assets/images/blog2.gif";
import CurrentPagesContext from "../../PagesContexts";


function Home() {
  const [arrayData, setarrayData] = useState([]);
  const {
    setAcceuil,
    setHistoire,
    setAssociations,
    setAtelierCarte,
    setBlog,
    setCreationEvenement,
    setIsOpenJeCree,
  } = useContext(CurrentPagesContext);
  useEffect(() => {
    api
      .get(`/api/new-article`)
      .then((res) => res.data)
      .then((cards) => {
        setarrayData(cards);
      });
  }, []);
  const goToBlog = () => {
    setAcceuil(false);
    setHistoire(false);
    setAssociations(false);
    setAtelierCarte(false);
    setCreationEvenement(false);
    setBlog(true);
  };
  const goToCreationEvenement = () => {
    setAcceuil(false);
    setHistoire(false);
    setAssociations(false);
    setAtelierCarte(false);
    setBlog(false);
    setCreationEvenement(true);
    setTimeout(() => {
      setIsOpenJeCree(false);
    }, 250);
  };
  const goToAtelierCarte = () => {
    setAcceuil(false);
    setHistoire(false);
    setAssociations(false);
    setBlog(false);
    setCreationEvenement(false);
    setTimeout(() => {
      setIsOpenJeCree(false);
    }, 250);
    setAtelierCarte(true);
  };
  const goOutHome = () => {
    setAcceuil(false);
    setHistoire(false);
    setAssociations(false);
    setAtelierCarte(false);
    setCreationEvenement(false);
    setBlog(false);
  };
  return (
    <Layout>
      <div className="acceuilContainer">
        <div className="homeLigne1">
          <div className="CCM">
            <div className="whiteContainer">
              <h2>La générosité depuis tout petits !</h2>
              <p>
                Sensibilisons petits (et grands) à la consommation responsable
                et à la philanthropie lors des événements heureux ! <br />{" "}
                Anniversaires enfant & ado, projets solidaires… <br />
                Profite d'une cagnotte cadeau et partage l’expérience du don a
                une association avec tes proches !
              </p>
              <h3>Comment ça marche ?</h3>
            </div>
          </div>
          <div className="blog">
            <Link to="/Blog" onClick={goToBlog}>
              <h3 className="titleAloja">Blog</h3>
            </Link>
          </div>
        </div>
        <div className="homeLigne2">
          <div className="creation">
             <Link to="/CreationEvenement" onClick={goToCreationEvenement}>
              <h3 className="titleAloja">Creer un evenement</h3>
            </Link>
          </div>
          <div className="rejoindre">
          <Link to="/JointEvent" onClick={goOutHome}>
            <h3 className="titleAloja">Rejoindre un evenement</h3>
            </Link>
          </div>
          <div className="article1">
            <img className="postGif" src={post2} alt="new post" />
            <h3 className="titleAloja">Article</h3>

            <div className="newArticle">
              {arrayData.map((card) => (
                <NewArticle key={card.id} article={card} />
              ))}
            </div>
          </div>
        </div>

        <div className="homeLigne3">
          <div className="Philan">
           <Link to="/Philanthrokids" onClick={goOutHome}>
              <h3 className="titleAloja">Philanthrokids</h3>
            </Link>
          </div>
          <div className="atelier">
             <Link to="/AtelierCarte" onClick={goToAtelierCarte}>
              <h3 className="titleAloja">Atelier carte d'invitation</h3>
            </Link>
          </div>
          <div className="news">
            <Newsletter />
          </div>

        </div>
      </div>
      <div className="confianceFlex">
        <div className="confiance">
          <div className="divTitre">
            <h2>ils nous font confiance</h2>
          </div>
          <div>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of{" "}
            </p>
          </div>
          <div className="globalCercle">
            <div className="cerclePartenaire" />
            <div className="cerclePartenaire" />
            <div className="cerclePartenaire" />
            <div className="cerclePartenaire" />
            <div className="cerclePartenaire" />
            <div className="cerclePartenaire" />
            <div className="cerclePartenaire" />
            <div className="cerclePartenaire" />
            <div className="cerclePartenaire" />
          </div>
        </div>
      </div>
      {/* <Eventback />
      <Userback /> */}
    </Layout>
  );
}

export default Home;
