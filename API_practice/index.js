fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then((res) => res.json())
    .then((data) => createHtmlFromData(data))
function createHtmlFromData(dataObj) {
    let {squadName, homeTown, formed, members} = dataObj
    document.body.insertAdjacentHTML(
        'afterbegin',
        `
        <h1>${squadName}</h1>
        <h2>Hometown: ${homeTown} // Formed: ${formed}</h2>
        <div class="members"> ${convertMembers(members)}</div>
        `
    )
}


function convertMembers(members) {
    let a = members.map((member) => {
        return`
        <div class="members__child">
            <h1>${member.name}</h1>
            <p>Secret identity: ${member.secretIdentity}</p>
            <p>Age: ${member.age}</p>
            <p>Superpowers: </p>
            <ul>
                ${
                member.powers.map(
                    (power) => {
                        console.log(power)
                        return `<li>${power}</li>`
                    }
                ).join(' ')
                }
            </ul>
        </div>
        `
    }).join(' ')
    return a
}