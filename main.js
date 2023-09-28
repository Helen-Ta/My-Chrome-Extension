async function fetchData() {
    const userInput = prompt("What city do you live in?");
    userInput.replace(/ /g, "%20");
    const url = `https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${userInput}&country_name=united%20states`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '37d8ff4b4emshf0101c27891626cp195da7jsn59324294e1a0',
		'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
	}
};

	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);

    document.getElementById("prices").innerHTML = result.prices.map(el => `<li>${el.item_name} = $${el.avg}</li>`).join('');
}
fetchData();