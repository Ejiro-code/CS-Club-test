const cardData = [
    {
        heading:'card 1',
        body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa corporis delectus ratione. Dolorem magni laborum aspernatur excepturi molestias placeat'
    },
    {
        heading:'card 2',
        body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa corporis delectus ratione. Dolorem magni laborum aspernatur excepturi molestias placeat'
    },
    {
        heading:'card 3',
        body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa corporis delectus ratione. Dolorem magni laborum aspernatur excepturi molestias placeat'
    },
]


const postContainer = document.querySelector('.card-container');

const postMethods = ()=>{
    cardData.map((postData)=>{
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML=`
        <h1 class="card-heading">${postData.heading}</h1>
        <p class="card-body" style="font-size: large;">${postData.body}</p>
`
        postContainer.appendChild(postElement)
    })

}

const cardD = [
    {
        heading:'Project 1',
        body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, numquam placeat.'
    },
    {
        heading:'Project 2',
        body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, numquam placeat.'
    },
    {
        heading:'Project 3',
        body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, numquam placeat.'
    },
    {
        heading:'Project 4',
        body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, numquam placeat.'
    },
    {
        heading:'Project 5',
        body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, numquam placeat.'
    },
    {
        heading:'Project 6',
        body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, numquam placeat.'
    },
    {
        heading:'Project 7',
        body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, numquam placeat.'
    },
    {
        heading:'Project 8',
        body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, numquam placeat.'
    },
    {
        heading:'Project 9',
        body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, numquam placeat.'
    },
    {
        heading:'Project 10',
        body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, numquam placeat.'
    },
    {
        heading:'Project 11',
        body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, numquam placeat.'
    },
    {
        heading:'Project 12',
        body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, numquam placeat.'
    },
    {
        heading:'Project 13',
        body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, numquam placeat.'
    },
    {
        heading:'Project 14',
        body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, numquam placeat.'
    },
    {
        heading:'Project 15',
        body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, numquam placeat.'
    },
    {
        heading:'Project 16',
        body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, numquam placeat.'
    },

]
const postContainer2 = document.querySelector('.card-contains');

const postMethods2 = ()=>{
    cardD.map((postData)=>{
        const postElement = document.createElement('div');
        postElement.classList.add('card_set');
        postElement.innerHTML=`
        <h1 class="card-heading" style="text-align: center;">${postData.heading}</h1>
        <p class="card-body" style="font-size: large;">${postData.body}</p>
`
        postContainer2.appendChild(postElement)
    })

}

postMethods()
postMethods2()