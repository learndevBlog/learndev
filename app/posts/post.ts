import { Category } from "./category";

export type Post = {
    id: string;
    author: {
      name: string;
      image: string;
    };
    description: string;
    title: string;
    publishDate: string;
    category: Category;
    image: string;
  };

export const posts: Post[] = [
    {
        id: '1',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/web_developer.png'
        },
        description: "Nam rerum facilis vel nostrum veniam et enim omnis 33 animi voluptatem et earum laboriosam et odit dicta ut reiciendis aspernatur. Et soluta numquam ea quis quod eum cumque rerum sit pariatur nesciunt ut dolores temporibus. Eos deleniti nobis ab deserunt voluptas qui quam harum aut doloribus ipsa ab quibusdam quidem qui quod rerum sed aliquam quasi. 33 blanditiis consequatur non enim corporis At tempore vero et rerum vitae.",
        title: "How to develop a product from scratch",
        publishDate: '10/01/2024',
        category: {
            id: 1,
            name: 'Design'
        },
        image: '/images/test.jpg'
    },
    {
        id: '2',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Nam rerum facilis vel nostrum veniam et enim omnis 35 animi voluptatem et earum laboriosam et odit dicta ut reiciendis aspernatur. Et soluta numquam ea quis quod eum cumque rerum sit pariatur nesciunt ut dolores temporibus. Eos deleniti nobis ab deserunt voluptas qui quam harum aut doloribus ipsa ab quibusdam quidem qui quod rerum sed aliquam quasi. 33 blanditiis consequatur non enim corporis At tempore vero et rerum vitae.",
        title: "Amazon re:invent 2023",
        publishDate: '10/01/2024',
        category: {
          id: 1,
          name: 'Design'
        },
        image: '/images/aws.jpeg'
    },
    {
        id: '3',
        author: {
          name: 'Thiago Bomfim really huge author name',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Um título super grande que precisa ser cortado porque depois nao vai caber na tela",
        title: "Um título super grande que precisa ser cortado porque depois nao vai caber na tela",
        publishDate: '11/01/2024',
        category: {
          id: 1,
          name: 'Design'
        },
        image: '/images/fintech.png'
      },
      {
        id: '4',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post 4",
        title: "Título do post 4",
        publishDate: '12/01/2024',
        category: {
          id: 1,
          name: 'Design'
        },
        image: '/images/test.jpg'
      },
      {
        id: '5',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post 5",
        title: "Título do post 5",
        publishDate: '13/01/2024',
        category: {
          id: 1,
          name: 'Design'
        },
        image: '/images/test.jpg'
      },
      {
        id: '6',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post 6",
        title: "Título do post 6",
        publishDate: '14/01/2024',
        category: {
          id: 2,
          name: 'Development'
        },
        image: '/images/fintech.png'
      },
      {
        id: '7',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post 7",
        title: "Título do post 7",
        publishDate: '15/01/2024',
        category: {
          id: 2,
          name: 'Development'
        },
        image: '/images/test.jpg'
      },
      {
        id: '8',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post 8",
        title: "Título do post 8",
        publishDate: '15/01/2024',
        category: {
          id: 2,
          name: 'Development'
        },
        image: '/images/test.jpg'
      },
      {
        id: '9',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post 9",
        title: "Título do post 9",
        publishDate: '15/01/2024',
        category: {
          id: 2,
          name: 'Development'
        },
        image: '/images/fintech.png'
      },
      {
        id: '10',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post 10",
        title: "Título do post 10",
        publishDate: '15/01/2024',
        category: {
          id: 2,
          name: 'Development'
        },
        image: '/images/test.jpg'
      },
      {
        id: '11',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post 11",
        title: "Título do post 11",
        publishDate: '15/01/2024',
        category: {
          id: 3,
          name: 'Customer Support'
        },
        image: '/images/test.jpg'
      },
      {
        id: '12',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post 12",
        title: "Título do post 12",
        publishDate: '15/01/2024',
        category: {
          id: 3,
          name: 'Customer Support'
        },
        image: '/images/fintech.png'
      },
      {
        id: '13',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post 13",
        title: "Título do post 13",
        publishDate: '15/01/2024',
        category: {
          id: 3,
          name: 'Customer Support'
        },
        image: '/images/test.jpg'
      },
      {
        id: '14',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post 14",
        title: "Título do post 14",
        publishDate: '15/01/2024',
        category: {
          id: 3,
          name: 'Customer Support'
        },
        image: '/images/test.jpg'
      },
      {
        id: '15',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post 15",
        title: "Título do post 15",
        publishDate: '15/01/2024',
        category: {
          id: 3,
          name: 'Customer Support'
        },
        image: '/images/fintech.png'
      },
      {
        id: ' 16',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post  16",
        title: "Título do post  16",
        publishDate: '15/01/2024',
        category: {
          id: 4,
          name: 'Leadership'
        },
        image: '/images/test.jpg'
      },
      {
        id: '17',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post 17",
        title: "Título do post 17",
        publishDate: '15/01/2024',
        category: {
          id: 4,
          name: 'Leadership'
        },
        image: '/images/test.jpg'
      },
      {
        id: '18',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post 18",
        title: "Título do post 18",
        publishDate: '15/01/2024',
        category: {
          id: 4,
          name: 'Leadership'
        },
        image: '/images/fintech.png'
      },
      {
        id: '19',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post 19",
        title: "Título do post 19",
        publishDate: '15/01/2024',
        category: {
          id: 4,
          name: 'Leadership'
        },
        image: '/images/test.jpg'
      },
      {
        id: '20',
        author: {
          name: 'Thiago Bomfim',
          image: '/images/solo-leveling.jpeg'
        },
        description: "Descrição do post 20",
        title: "Título do post 20",
        publishDate: '15/01/2024',
        category: {
          id: 4,
          name: 'Leadership'
        },
        image: '/images/test.jpg'
      },
  ];