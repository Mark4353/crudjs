import {getPlantsApi} from "./servises/getPlantsApi.js"
import { createList } from "./markapp/createList.js"
getPlantsApi().then(plants=> {document.querySelector(".list").innerHTML = createList(plants)})

