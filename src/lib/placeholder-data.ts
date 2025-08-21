// This file contains placeholder data for the BeeCommerce app.

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/courses', label: 'Courses' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export type Product = {
    id: string;
    name: string;
    price: string;
    priceValue: number;
    image: string;
    category: string;
    hint: string;
    description: string;
    features: string[];
    reviews: {
        rating: number;
        author: string;
        text: string;
        date: string;
    }[];
    stock: 'in_stock' | 'low_stock' | 'out_of_stock';
};

export type QuizQuestion = {
    type: 'quiz';
    title: string;
    question: string;
    options: string[];
    correctAnswer: number;
};

export type Course = {
    id: string;
    title: string;
    price: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    image: string;
    description: string;
    hint: string;
    curriculum: (string | QuizQuestion)[];
};

export const allProducts: Product[] = [
    {
        id: 'prod_1',
        name: 'Raw Wildflower Honey',
        price: '$15.99',
        priceValue: 15.99,
        image: 'https://placehold.co/600x600.png',
        category: 'Honey',
        hint: 'honey jar',
        description: 'Pure, unfiltered wildflower honey straight from our hives. A taste of nature\'s finest, with complex floral notes and a rich amber color. Perfect for toast, tea, or any recipe that needs a touch of natural sweetness.',
        features: [
            "100% Raw & Unfiltered",
            "Sustainably Harvested",
            "From Wildflower Blossoms",
            "16oz (1lb) Jar"
        ],
        reviews: [
            { rating: 5, author: "Emily R.", text: "Absolutely the best honey I've ever tasted. You can really taste the difference.", date: "2024-06-15" },
            { rating: 4, author: "John S.", text: "Great flavor and consistency. A bit pricey but worth it for the quality.", date: "2024-06-10" }
        ],
        stock: 'in_stock'
    },
    {
        id: 'prod_2',
        name: 'Italian Mated Queen Bee',
        price: '$45.00',
        priceValue: 45.00,
        image: 'https://placehold.co/600x600.png',
        category: 'Live Bees',
        hint: 'queen bee',
        description: 'A young, professionally mated Italian queen bee, marked for easy identification. Known for her prolific laying pattern and gentle temperament, she is ready to lead your colony to success.',
        features: [
            "Marked Italian Queen (Apis mellifera ligustica)",
            "Excellent Brood Production",
            "Gentle & Calm Temperament",
            "Shipped Safely in a Queen Cage with Attendants"
        ],
        reviews: [
            { rating: 5, author: "Beekeeper Bill", text: "My new queen arrived healthy and was accepted by the hive immediately. She's a fantastic layer!", date: "2024-05-20" }
        ],
        stock: 'in_stock'
    },
    {
        id: 'prod_3',
        name: 'Beekeeping Starter Kit',
        price: '$129.99',
        priceValue: 129.99,
        image: 'https://placehold.co/600x600.png',
        category: 'Equipment',
        hint: 'beekeeping equipment',
        description: 'Everything you need to start your beekeeping journey. Includes a standard 10-frame Langstroth hive, protective gear, and essential tools. Just add bees!',
        features: [
            "10-Frame Langstroth Hive (Unassembled)",
            "Veil with Helmet",
            "Goatskin Gloves",
            "Hive Tool & Bee Brush",
            "Stainless Steel Smoker"
        ],
        reviews: [
             { rating: 5, author: "Sarah K.", text: "This kit had everything. Made getting started so much less intimidating. Great value.", date: "2024-06-01" },
             { rating: 4, author: "Mike T.", text: "Solid kit for the price. Assembling the hive was a fun project.", date: "2024-05-25" }
        ],
        stock: 'in_stock'
    },
    {
        id: 'prod_4',
        name: 'Clover Honey',
        price: '$12.99',
        priceValue: 12.99,
        image: 'https://placehold.co/600x600.png',
        category: 'Honey',
        hint: 'honey jar',
        description: 'Classic, light, and sweet clover honey. A versatile favorite for tea, baking, or just by the spoonful.',
        features: [
            "100% Pure Clover Honey",
            "Mild, Sweet Flavor",
            "Perfect for Everyday Use",
            "16oz (1lb) Jar"
        ],
        reviews: [],
        stock: 'in_stock'
    },
    {
        id: 'prod_5',
        name: 'Carniolan Mated Queen Bee',
        price: '$48.00',
        priceValue: 48.00,
        image: 'https://placehold.co/600x600.png',
        category: 'Live Bees',
        hint: 'queen bee',
        description: 'A young, mated Carniolan queen bee, known for her winter hardiness and explosive spring buildup.',
        features: [
            "Marked Carniolan Queen (Apis mellifera carnica)",
            "Excellent Overwintering Capabilities",
            "Rapid Spring Buildup",
            "Shipped Safely in a Queen Cage with Attendants"
        ],
        reviews: [
            { rating: 5, author: "Northern Beekeeper", text: "My go-to queens for my climate. Always strong and healthy.", date: "2024-04-30" }
        ],
        stock: 'low_stock'
    },
    {
        id: 'prod_6',
        name: '10-Frame Langstroth Hive',
        price: '$89.99',
        priceValue: 89.99,
        image: 'https://placehold.co/600x600.png',
        category: 'Equipment',
        hint: 'beehive',
        description: 'A complete 10-frame Langstroth hive, including bottom board, deep hive body, frames, inner cover, and telescoping outer cover.',
        features: [
            "Solid Pine Construction",
            "Includes 1 Deep Hive Body",
            "10 Frames with Foundation",
            "Easy to Assemble"
        ],
        reviews: [],
        stock: 'out_of_stock'
    },
    {
        id: 'prod_7',
        name: 'Smoker with Shield',
        price: '$25.50',
        priceValue: 25.50,
        image: 'https://placehold.co/600x600.png',
        category: 'Equipment',
        hint: 'bee smoker',
        description: 'A durable stainless steel smoker with a protective heat shield to keep you safe during hive inspections.',
        features: [
            "Stainless Steel Body",
            "Built-in Heat Shield",
            "Perforated Base Plate for Airflow",
            "Leather Bellows"
        ],
        reviews: [],
        stock: 'in_stock'
    },
];

export const featuredProducts = allProducts.slice(0, 3);

export const testimonials = [
  {
    name: 'Jane D.',
    quote: "The best honey I have ever tasted! The queen bee arrived healthy and is doing great. Highly recommend BeeCommerce.",
    avatar: 'https://placehold.co/100x100.png',
    hint: 'woman portrait',
  },
  {
    name: 'Mark S.',
    quote: "My go-to for all my beekeeping needs. The starter kit had everything I needed to get up and running. Fantastic quality!",
    avatar: 'https://placehold.co/100x100.png',
    hint: 'man portrait',
  },
  {
    name: 'Clara B.',
    quote: 'The "Beekeeping for Beginners" course was incredibly informative. The instructor was clear and the videos were high-quality.',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'woman portrait smiling',
  },
];

export const allCourses: Course[] = [
  {
    id: 'course_1',
    title: 'Beekeeping for Beginners',
    price: '$99',
    level: 'Beginner',
    image: 'https://placehold.co/600x400.png',
    description: 'Learn the fundamentals of beekeeping, from setting up your first hive to your first honey harvest. Perfect for aspiring apiarists.',
    hint: 'beekeeper holding frame',
    curriculum: [
        'Introduction to Bees and Beekeeping',
        'Hive Components and Equipment',
        {
            type: 'quiz',
            title: 'Knowledge Check: Equipment',
            question: 'What is the primary purpose of a bee smoker?',
            options: [
                'To feed the bees sugar water.',
                'To calm the bees by masking alarm pheromones.',
                'To warm the hive in winter.',
                'To harvest honey from the frames.'
            ],
            correctAnswer: 1
        },
        'Installing Your First Bee Package',
        'Hive Inspections and Management',
        'Honey Harvesting and Extraction',
        'Common Pests and Diseases'
    ]
  },
  {
    id: 'course_2',
    title: 'Advanced Queen Rearing',
    price: '$199',
    level: 'Advanced',
    image: 'https://placehold.co/600x400.png',
    description: 'Master the art of rearing your own high-quality queen bees. This course covers grafting, cell builders, and mating nucs.',
    hint: 'queen bee on honeycomb',
    curriculum: ['Queen Bee Biology and Genetics', 'Grafting Techniques and Tools', 'Setting Up Cell Builder Colonies', 'Managing Mating Nucs', 'Marking and Caging Queens', 'Troubleshooting Queen Rearing Issues']
  },
  {
    id: 'course_3',
    title: 'Natural & Organic Beekeeping',
    price: '$149',
    level: 'Intermediate',
    image: 'https://placehold.co/600x400.png',
    description: 'Explore sustainable and treatment-free beekeeping practices. Learn how to work with the natural instincts of your bees.',
    hint: 'bees flowers',
    curriculum: ['Principles of Natural Beekeeping', 'Top-Bar Hives and Warre Hives', 'Integrated Pest Management (IPM)', 'Promoting Colony Health Naturally', 'Foundationless Beekeeping', 'Harvesting and Processing for Quality']
  },
];


export const blogPosts = [
  {
    slug: 'first-year-of-beekeeping',
    title: 'Your First Year of Beekeeping: A Month-by-Month Guide',
    summary: 'Starting your beekeeping journey is exciting! Here’s what to expect and what to do during your first 12 months as a beekeeper.',
    image: 'https://placehold.co/800x400.png',
    author: 'Apiarist Anna',
    date: '2024-05-15',
    hint: 'beekeeper apiary',
    content: "The first year of beekeeping is a steep learning curve, but incredibly rewarding. In spring, you'll install your bee package and feed them sugar syrup to help them build comb. Summer is for monitoring growth, watching for pests like Varroa mites, and adding new hive boxes (supers) as the colony expands. As fall approaches, you'll prepare the hive for winter, ensuring they have enough honey stores. Winter is a quiet time for the beekeeper, but crucial for the bees' survival. Stay patient, keep learning, and enjoy the journey!",
  },
  {
    slug: 'how-to-spot-your-queen',
    title: 'How to Spot Your Queen Bee: Tips and Tricks',
    summary: 'Finding the queen can feel like looking for a needle in a haystack. We share our top tips to help you spot her majesty with ease.',
    image: 'https://placehold.co/800x400.png',
    author: 'Apiarist Anna',
    date: '2024-04-22',
    hint: 'queen bee closeup',
    content: "Finding your queen bee is a key skill. Look for a bee that is longer and more slender than the workers. Her abdomen is noticeably larger. She is often surrounded by a circle of attendant bees who feed and groom her. Look for a pattern of freshly laid eggs—tiny white dots at the bottom of cells—as the queen will always be nearby. A marked queen (with a small dot of paint on her thorax) is much easier to find. Be patient and move slowly through the frames."
  },
  {
    slug: 'benefits-of-raw-honey',
    title: 'More Than Sweet: The Health Benefits of Raw Honey',
    summary: "Discover the amazing health benefits packed into every spoonful of raw, unprocessed honey. It's not just a sweetener, it's a superfood.",
    image: 'https://placehold.co/800x400.png',
    author: 'Apiarist Anna',
    date: '2024-03-10',
    hint: 'honey dripping',
    content: "Raw honey is honey as it exists in the beehive. It has not been heated or pasteurized, which means it retains all its natural vitamins, enzymes, and antioxidants. It's known for its antibacterial and antifungal properties. It can help with sore throats, digestive issues, and can even be used on skin to heal wounds. Unlike processed sugar, it contains trace minerals and doesn't cause the same spike in blood sugar."
  },
];

export const accountNavLinks = [
  { href: '/account', label: 'Profile' },
  { href: '/account/orders', label: 'My Orders' },
  { href: '/account/courses', label: 'My Courses' },
];

export const orders = [
    {
        id: 'ORD-001',
        date: '2024-05-20',
        status: 'Delivered',
        total: '$60.99',
        items: [
            { ...allProducts[0], quantity: 1 },
            { ...allProducts[6], quantity: 1 }
        ]
    },
    {
        id: 'ORD-002',
        date: '2024-05-28',
        status: 'Shipped',
        total: '$45.00',
        items: [
            { ...allProducts[1], quantity: 1 }
        ]
    },
    {
        id: 'ORD-003',
        date: '2024-06-01',
        status: 'Processing',
        total: '$129.99',
        items: [
            { ...allProducts[2], quantity: 1 }
        ]
    }
];

export const myCourses = [
    {
        ...allCourses[0],
        progress: 80,
        certificateUrl: '#'
    },
    {
        ...allCourses[2],
        progress: 45,
        certificateUrl: null
    }
]
