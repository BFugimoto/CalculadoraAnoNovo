const dataAtual = document.getElementById("dataAtual");
const horaAtual = document.getElementById("horaAtual");
const calcDias = document.getElementById("calcDias");
const diasLeft = document.getElementById("diasLeft");

const nowDate = new Date();
const anoNovo = new Date(nowDate.getFullYear() + 1, 0, 1);

dataAtual.innerHTML = nowDate.getDate() + "/" + (nowDate.getMonth() + 1) + "/" + nowDate.getFullYear();

horaAtual.innerHTML = nowDate.getHours() + ":" + nowDate.getMinutes() + ":" + nowDate.getSeconds();

calcDias.addEventListener("click", () => {
    const timeDiff = anoNovo - nowDate;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        
    diasLeft.innerHTML = daysDiff + " dias para o Ano Novo!";
})