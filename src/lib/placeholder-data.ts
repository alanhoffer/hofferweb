// Este archivo contiene datos de ejemplo para la app BeeCommerce.

export const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/shop', label: 'Tienda' },
  { href: '/courses', label: 'Cursos' },
  { href: '/smart-tools', label: 'Herramientas Inteligentes' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'Acerca de' },
  { href: '/contact', label: 'Contacto' },
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
        name: 'Miel clara de pradera',
        price: '$15.99',
        priceValue: 15.99,
        image: 'https://i.ibb.co/23r5v2PW/Group-19-removebg-preview.png',
        category: 'Equipment',
        hint: 'tarro de miel',
        description: 'Miel pura y sin filtrar de flores silvestres directamente de nuestras colmenas. Un sabor de la naturaleza con notas florales complejas y un color ámbar intenso. Perfecta para tostadas, té o cualquier receta que necesite un toque de dulzura natural.',
        features: [
            "100% Cruda y Sin Filtrar",
            "Cosechada de Forma Sostenible",
            "De Flores Silvestres",
            "Tarro de 16oz (1lb)"
        ],
        reviews: [
            { rating: 5, author: "Emily R.", text: "Absolutamente la mejor miel que he probado. Se nota la diferencia.", date: "2024-06-15" },
            { rating: 4, author: "John S.", text: "Excelente sabor y consistencia. Un poco cara pero vale la calidad.", date: "2024-06-10" }
        ],
        stock: 'in_stock'
    },
    {
        id: 'prod_2',
        name: 'Miel oscura de coronillo',
        price: '$45.00',
        priceValue: 45.00,
        image: 'https://i.ibb.co/spPy3SD2/Group-21-removebg-preview.png',
        category: 'Equipment',
        hint: 'reina abeja',
        description: 'Una joven reina italiana apareada profesionalmente, marcada para fácil identificación. Conocida por su excelente postura de huevos y temperamento tranquilo, lista para liderar tu colonia.',
        features: [
            "Reina Italiana Marcada (Apis mellifera ligustica)",
            "Excelente Producción de Crías",
            "Temperamento Tranquilo y Amigable",
            "Enviada de Forma Segura en Jaula con Acompañantes"
        ],
        reviews: [
            { rating: 5, author: "Apicultor Bill", text: "Mi nueva reina llegó saludable y fue aceptada de inmediato. ¡Excelente postura!", date: "2024-05-20" }
        ],
        stock: 'in_stock'
    },
    {
        id: 'prod_3',
        name: 'Miel semi clara de pradera',
        price: '$129.99',
        priceValue: 129.99,
        image: 'https://i.ibb.co/67WsYLb0/Group-20-removebg-preview.png',
        category: 'Equipment',
        hint: 'equipo de apicultura',
        description: 'Todo lo que necesitas para comenzar tu aventura en apicultura. Incluye colmena Langstroth de 10 cuadros, equipo de protección y herramientas esenciales. ¡Solo añade abejas!',
        features: [
            "Colmena Langstroth de 10 cuadros (sin armar)",
            "Velo con Casco",
            "Guantes de Cuero de Cabra",
            "Herramienta de Colmena y Cepillo de Abejas",
            "Ahumador de Acero Inoxidable"
        ],
        reviews: [
             { rating: 5, author: "Sarah K.", text: "El kit tenía todo. Comenzar fue mucho más fácil. Excelente valor.", date: "2024-06-01" },
             { rating: 4, author: "Mike T.", text: "Kit sólido por el precio. Armar la colmena fue divertido.", date: "2024-05-25" }
        ],
        stock: 'in_stock'
    },
    {
        id: 'prod_4',
        name: 'Jalea Real 100g',
        price: '$129.99',
        priceValue: 129.99,
        image: 'https://i.ibb.co/qFmkBJ21/Group-32.png',
        category: 'Equipment',
        hint: 'equipo de apicultura',
        description: 'Todo lo que necesitas para comenzar tu aventura en apicultura. Incluye colmena Langstroth de 10 cuadros, equipo de protección y herramientas esenciales. ¡Solo añade abejas!',
        features: [
            "Colmena Langstroth de 10 cuadros (sin armar)",
            "Velo con Casco",
            "Guantes de Cuero de Cabra",
            "Herramienta de Colmena y Cepillo de Abejas",
            "Ahumador de Acero Inoxidable"
        ],
        reviews: [
             { rating: 5, author: "Sarah K.", text: "El kit tenía todo. Comenzar fue mucho más fácil. Excelente valor.", date: "2024-06-01" },
             { rating: 4, author: "Mike T.", text: "Kit sólido por el precio. Armar la colmena fue divertido.", date: "2024-05-25" }
        ],
        stock: 'in_stock'
    },
    {
        id: 'prod_5',
        name: 'Propoleo',
        price: '$129.99',
        priceValue: 129.99,
        image: 'https://i.ibb.co/0V2Qdsbg/PROPOLEO.png',
        category: 'Equipment',
        hint: 'equipo de apicultura',
        description: 'Todo lo que necesitas para comenzar tu aventura en apicultura. Incluye colmena Langstroth de 10 cuadros, equipo de protección y herramientas esenciales. ¡Solo añade abejas!',
        features: [
            "Colmena Langstroth de 10 cuadros (sin armar)",
            "Velo con Casco",
            "Guantes de Cuero de Cabra",
            "Herramienta de Colmena y Cepillo de Abejas",
            "Ahumador de Acero Inoxidable"
        ],
        reviews: [
             { rating: 5, author: "Sarah K.", text: "El kit tenía todo. Comenzar fue mucho más fácil. Excelente valor.", date: "2024-06-01" },
             { rating: 4, author: "Mike T.", text: "Kit sólido por el precio. Armar la colmena fue divertido.", date: "2024-05-25" }
        ],
        stock: 'in_stock'
    },
    {
        id: 'Celdas Reales',
        name: 'Celdas Reales',
        price: '$129.99',
        priceValue: 129.99,
        image: 'https://i.ibb.co/vx8dfnL9/GOPR0186-1663953230769.jpg',
        category: 'Live Bees',
        hint: 'equipo de apicultura',
        description: 'Todo lo que necesitas para comenzar tu aventura en apicultura. Incluye colmena Langstroth de 10 cuadros, equipo de protección y herramientas esenciales. ¡Solo añade abejas!',
        features: [
            "Colmena Langstroth de 10 cuadros (sin armar)",
            "Velo con Casco",
            "Guantes de Cuero de Cabra",
            "Herramienta de Colmena y Cepillo de Abejas",
            "Ahumador de Acero Inoxidable"
        ],
        reviews: [
             { rating: 5, author: "Sarah K.", text: "El kit tenía todo. Comenzar fue mucho más fácil. Excelente valor.", date: "2024-06-01" },
             { rating: 4, author: "Mike T.", text: "Kit sólido por el precio. Armar la colmena fue divertido.", date: "2024-05-25" }
        ],
        stock: 'in_stock'
    },
    {
        id: 'Reina Italiana Fecundada',
        name: 'Reina Italiana Fecundada',
        price: '$129.99',
        priceValue: 129.99,
        image: 'https://i.ibb.co/jpL5fpy/20240926-144417.jpg',
        category: 'Live Bees',
        hint: 'equipo de apicultura',
        description: 'Todo lo que necesitas para comenzar tu aventura en apicultura. Incluye colmena Langstroth de 10 cuadros, equipo de protección y herramientas esenciales. ¡Solo añade abejas!',
        features: [
            "Colmena Langstroth de 10 cuadros (sin armar)",
            "Velo con Casco",
            "Guantes de Cuero de Cabra",
            "Herramienta de Colmena y Cepillo de Abejas",
            "Ahumador de Acero Inoxidable"
        ],
        reviews: [
             { rating: 5, author: "Sarah K.", text: "El kit tenía todo. Comenzar fue mucho más fácil. Excelente valor.", date: "2024-06-01" },
             { rating: 4, author: "Mike T.", text: "Kit sólido por el precio. Armar la colmena fue divertido.", date: "2024-05-25" }
        ],
        stock: 'in_stock'
    },
    // ... resto de productos traducidos de forma similar
];

export const featuredProducts = allProducts.slice(0, 3);

export const testimonials = [
  {
    name: 'Agustin F.',
    quote: "¡La mejor miel que he probado! La reina llegó saludable y está haciendo un gran trabajo. Recomiendo BeeCommerce totalmente.",
    avatar: 'https://placehold.co/100x100.png',
    hint: 'retrato de mujer',
  },
  {
    name: 'Juan S.',
    quote: "Mi recurso principal para todo en apicultura. El kit de inicio tenía todo lo que necesitaba. Calidad fantástica!",
    avatar: 'https://placehold.co/100x100.png',
    hint: 'retrato de hombre',
  },
  {
    name: 'Roberto F.',
    quote: 'El curso "Apicultura para Principiantes" fue muy informativo. El instructor fue claro y los videos de alta calidad.',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'retrato de mujer sonriendo',
  },
];

export const allCourses: Course[] = [
  {
    id: 'course_1',
    title: 'Apicultura para Principiantes',
    price: '$99',
    level: 'Beginner',
    image: 'https://placehold.co/600x400.png',
    description: 'Aprende los fundamentos de la apicultura, desde instalar tu primera colmena hasta tu primera cosecha de miel. Perfecto para aspirantes a apicultores.',
    hint: 'apicultor sosteniendo cuadro',
    curriculum: [
        'Introducción a las Abejas y Apicultura',
        'Componentes de la Colmena y Equipamiento',
        {
            type: 'quiz',
            title: 'Evaluación: Equipamiento',
            question: '¿Cuál es el propósito principal del ahumador de abejas?',
            options: [
                'Alimentar a las abejas con jarabe de azúcar.',
                'Calmar a las abejas enmascarando feromonas de alarma.',
                'Calentar la colmena en invierno.',
                'Cosechar miel de los cuadros.'
            ],
            correctAnswer: 1
        },
        'Instalación de tu Primer Paquete de Abejas',
        'Inspecciones y Manejo de la Colmena',
        'Cosecha y Extracción de Miel',
        'Plagas y Enfermedades Comunes'
    ]
  },
  {
    id: 'course_2',
    title: 'Cría Avanzada de Reinas',
    price: '$199',
    level: 'Advanced',
    image: 'https://placehold.co/600x400.png',
    description: 'Domina el arte de criar reinas de alta calidad. El curso cubre injertos, colmenas de cría y núcleos de apareamiento.',
    hint: 'reina sobre panal',
    curriculum: ['Biología y Genética de la Reina', 'Técnicas de Injerto', 'Configuración de Colmenas de Cría', 'Manejo de Núcleos de Apareamiento', 'Marcado y Enjaulado de Reinas', 'Solución de Problemas en Cría de Reinas']
  },
  {
    id: 'course_3',
    title: 'Apicultura Natural y Orgánica',
    price: '$149',
    level: 'Intermediate',
    image: 'https://placehold.co/600x400.png',
    description: 'Explora prácticas de apicultura sostenibles y libres de tratamientos. Aprende a trabajar con los instintos naturales de tus abejas.',
    hint: 'abejas flores',
    curriculum: ['Principios de Apicultura Natural', 'Colmenas Top-Bar y Warre', 'Manejo Integrado de Plagas (MIP)', 'Promoción de la Salud de la Colonia', 'Apicultura Sin Fundaciones', 'Cosecha y Procesamiento para Calidad']
  },
];

// El resto (blogPosts, accountNavLinks, orders, myCourses) se traduce de forma similar


export const blogPosts = [
  {
    slug: 'first-year-of-beekeeping',
    title: 'Tu Primer Año de Apicultura: Guía Mes a Mes',
    summary: 'Comenzar en la apicultura es emocionante. Esto es lo que esperar y hacer durante tus primeros 12 meses.',
    image: 'https://placehold.co/800x400.png',
    author: 'Apicultora Ana',
    date: '2024-05-15',
    hint: 'colmenar',
    content: "El primer año de apicultura tiene una curva de aprendizaje empinada, pero muy gratificante. En primavera instalas tu paquete de abejas y las alimentas con jarabe de azúcar para que construyan panales. En verano monitoreas crecimiento, plagas como ácaros Varroa y agregas alzas según la expansión. En otoño preparas la colmena para el invierno, asegurando reservas de miel. El invierno es un tiempo tranquilo para el apicultor, pero crucial para la supervivencia de las abejas. Paciencia, aprendizaje y disfrute del proceso."
  },
  {
    slug: 'how-to-spot-your-queen',
    title: 'Cómo Encontrar tu Reina: Tips y Trucos',
    summary: 'Encontrar la reina puede ser difícil. Aquí los mejores consejos para ubicarla con facilidad.',
    image: 'https://placehold.co/800x400.png',
    author: 'Apicultora Ana',
    date: '2024-04-22',
    hint: 'reina abeja primer plano',
    content: "La reina es más larga y delgada que las obreras. Su abdomen es más grande. Suele estar rodeada por abejas acompañantes que la alimentan y acicalan. Busca huevos recién puestos, puntos blancos en las celdas. Una reina marcada es más fácil de encontrar. Muévete despacio y con paciencia."
  },
  {
    slug: 'benefits-of-raw-honey',
    title: 'Más que Dulce: Beneficios de la Miel Cruda',
    summary: "Descubre los beneficios para la salud de cada cucharada de miel cruda y sin procesar.",
    image: 'https://placehold.co/800x400.png',
    author: 'Apicultora Ana',
    date: '2024-03-10',
    hint: 'miel cayendo',
    content: "La miel cruda no ha sido calentada ni pasteurizada, conservando vitaminas, enzimas y antioxidantes. Propiedades antibacterianas y antifúngicas. Ayuda en garganta, digestión y piel. Contiene minerales y no eleva tanto el azúcar en sangre como el azúcar procesado."
  },
];

export const accountNavLinks = [
  { href: '/account', label: 'Perfil' },
  { href: '/account/orders', label: 'Mis Pedidos' },
  { href: '/account/courses', label: 'Mis Cursos' },
];

export const orders = [
    {
        id: 'ORD-001',
        date: '2024-05-20',
        status: 'Entregado',
        total: '$60.99',
        items: [
            { ...allProducts[0], quantity: 1 },
            { ...allProducts[6], quantity: 1 }
        ]
    },
    {
        id: 'ORD-002',
        date: '2024-05-28',
        status: 'Enviado',
        total: '$45.00',
        items: [
            { ...allProducts[1], quantity: 1 }
        ]
    },
    {
        id: 'ORD-003',
        date: '2024-06-01',
        status: 'En Proceso',
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
];