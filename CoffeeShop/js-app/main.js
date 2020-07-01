const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
            render(beanVarieties)
        })
});


function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());}


    const contentTarget = document.querySelector(".beansVarietyContainer")

    const render = beanVarietiesToRender => {

        contentTarget.innerHTML = beanVarietiesToRender.map(
            (bvObject) => {

                return beanVariety(bvObject)
            }
        ).join("")
    }


    const beanVariety = (bvObject) => {
        return `
    <article class="beanVarieties">
    <section class="beanVariety">
        <header class="beanVariety_name">
            <h1>${bvObject.name}</h1>
        </header>
 
    </section>
</article>
    `
    }