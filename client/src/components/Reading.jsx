import React, {useState, useEffect} from "react";
import ListArticle from "./listArticle";
import axios from "axios";
import ListCategory from "./listCategory";
import DetailArticle from "./detailArticle";

export default function Reading(){

  const [listAr, setListAr] = useState([])

  async function fetchArticle() {
    try {
      const respond = await axios.get('http://localhost:8080/api/article/list');
      console.log(respond.data.data)
      setListAr(respond.data.data)

    } catch (error) {
      console.log("can't fetch article", error);
    }
  }

  useEffect(() => {
    
    fetchArticle()
  }, [])

  const list = listAr ; 
  // console.log(list, "ini list postingan")

      return(
            <div>
                  <div className="jumbotron">
                        <ListArticle list = {list}/> <br></br><br></br>
                        <ListCategory/><br></br>
                        <DetailArticle/>
                  </div>
            </div>
      )
}