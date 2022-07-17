const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune =() => { 
    axios.get("http://localhost:4000/api/fortune/")
       .then (res =>{
        const data =res.data;
        alert(data);

       });
};

fortuneBtn.addEventListener('click', getFortune)

const complimentInput =document.getElementById("complimentInput")

const addComplimentBtn =document.getElementById("addComplimentButton")
const putCompliment=() => { 
    axios.put("http://localhost:4000/api/compliment/", {
        compliment: complimentInput.value

    })
       .then (res =>{
        const data =res.data;
        alert(data);

       });
};
addComplimentBtn.addEventListener('click', putCompliment)

const continentSelect =document.getElementById("continentSelect")

const continentSelectBtn =document.getElementById("continentSelectButton")
const postContinent=() => { 
    axios.post("http://localhost:4000/api/continent/", {
        continent: continentSelect.value

    })
       .then (res =>{
        const data =res.data;
        alert(data);

       });
};
continentSelectBtn.addEventListener('click', postContinent)

const deleteComplimentBtn= document.getElementById("deleteComplimentButton")
const deleteCompliment=()=> {
    axios.delete("http://localhost:4000/api/compliment/")
    .then(res => {
        const data=res.data;
        alert(data);
    })

}
deleteComplimentBtn.addEventListener('click', deleteCompliment )

