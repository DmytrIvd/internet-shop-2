import { Item } from "../Entities/Item";

const data: Item[] = [
    {
        id: 1,
        title: "1",
        image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        description: "The small and serious"
    },
    {
        id: 2,
        title: "2",
        image: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d",
        description: "The big and curious"
    },
    {
        id: 3,
        title: "3",
        image: "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
        description: "The big and curious"
    },
    {
        id: 4,
        title: "4",
        image: "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
        description: "The big and curious"
    },
    {
        id: 5,
        title: "5",
        image: "https://cdn.britannica.com/q:60/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg",
        description: "The big and curious"
    },
];

export const fetchData = () => {
    return new Promise<{ data: Item[] }>((resolve, reject) => {
        setTimeout(() => resolve({ data: data }), 1000);
    });
};