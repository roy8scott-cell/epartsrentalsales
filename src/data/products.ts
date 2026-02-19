export type Product = {
  name: string;
  price: string;
  sku: string;
  description: string;
  image?: string;
};

export type Category = {
  name: string;
  products: Product[];
};

export type Brand = {
  id: string;
  name: string;
  accent: string;
  badge: string;
  categories: Category[];
};

const CDN = "https://www-static-nw.husqvarna.com/-/images/aprimo/husqvarna";

export const brands: Brand[] = [
  {
    id: "husqvarna",
    name: "Husqvarna",
    accent: "border-orange-500",
    badge: "bg-orange-500/10 text-orange-600",
    categories: [
      // ── 1. Blowers ──
      {
        name: "Blowers",
        products: [
          {
            name: "Husqvarna 590BTS",
            price: "$949.95",
            sku: "HUS-590BTS",
            description: "Mochila, 56 N de fuerza soplado. Ganador premio PTIA. Capacidad líder del mercado.",
            image: `${CDN}/blowers/photos/studio/at-683132.webp?v=ebfc1302e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 590BFS",
            price: "$949.95",
            sku: "HUS-590BFS",
            description: "Mochila, 56 N de fuerza. Control multi-velocidad con botón de arranque.",
            image: `${CDN}/blowers/photos/studio/at-683132.webp?v=ebfc1302e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 560BTS",
            price: "$569.95",
            sku: "HUS-560BTS",
            description: "Mochila, 30 N de fuerza. Motor X-TORQ® eficiente y potente.",
            image: `${CDN}/blowers/photos/studio/h210-0313.webp?v=dbab46bde00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 150BT",
            price: "$469.95",
            sku: "HUS-150BT",
            description: 'Mochila, 22 N de fuerza. Modelo "Best-Selling", ideal para uso comercial.',
            image: `${CDN}/blowers/photos/studio/bb-657339.webp?v=3b68b0e6e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 125B",
            price: "$299.95",
            sku: "HUS-125B",
            description: "De mano, ligero 9.4 lbs. Perfecto para uso residencial.",
            image: `${CDN}/blowers/photos/studio/ll-208571.webp?v=9b95d795e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
        ],
      },
      // ── 2. Brushcutters & Trimmers ──
      {
        name: "Brushcutters & Trimmers",
        products: [
          {
            name: "Husqvarna 545FR",
            price: "$999.95",
            sku: "HUS-545FR",
            description: "Desbrozadora forestal, 2.8 hp. Incluye cuchilla de sierra y cabezal.",
            image: `${CDN}/brushcutters/photos/studio/h210-0417.webp?v=e69c026548b61144&format=WEBP_SQUARE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 336FR",
            price: "$699.95",
            sku: "HUS-336FR",
            description: "Desbrozadora versátil, 1.7 hp. Motor X-TORQ® con arnés Balance 35.",
            image: `${CDN}/brushcutters/photos/studio/h210-0310.webp?v=92d62b4de00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 535LST",
            price: "$629.95",
            sku: "HUS-535LST",
            description: "Profesional gasolina, 2.15 hp. Alto par motor para trabajo pesado.",
            image: `${CDN}/grass-trimmers/photos/studio/h210-0740.webp?v=3fbde939e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 535LS",
            price: "$579.95",
            sku: "HUS-535LS",
            description: "Profesional gasolina, 2.15 hp. Uso rudo con engranaje reforzado.",
            image: `${CDN}/grass-trimmers/photos/studio/h210-0740.webp?v=3fbde939e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 525LST",
            price: "$469.95",
            sku: "HUS-525LST",
            description: "Profesional gasolina, 1.34 hp. Alto par motor, controles intuitivos.",
            image: `${CDN}/grass-trimmers/photos/studio/nb-080737.webp?v=7a903385e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 525L",
            price: "$419.95",
            sku: "HUS-525L",
            description: "Profesional gasolina, 1.21 hp. Controles intuitivos, arranque fácil.",
            image: `${CDN}/grass-trimmers/photos/studio/h210-0431b.webp?v=d304b40be00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 130L",
            price: "$349.95",
            sku: "HUS-130L",
            description: "Gasolina, 1 hp. Arranque fácil, ideal para uso residencial.",
            image: `${CDN}/grass-trimmers/photos/studio/qn-246565.webp?v=7349312de00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Combi Switch + 330iKL",
            price: "$489.95",
            sku: "HUS-330IKL",
            description: "Kit batería con trimmer Combi Switch. Sistema modular versátil.",
            image: `${CDN}/combi-trimmer-attachments/photos/studio/lz-341323.webp?v=944bcbb4e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Combi Switch + 330iKP",
            price: "$499.95",
            sku: "HUS-330IKP",
            description: "Kit sierra de pértiga con batería. Sistema Combi Switch modular.",
            image: `${CDN}/combi-trimmer-attachments/photos/studio/lz-341323.webp?v=944bcbb4e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "320iL + 230iB Bundle",
            price: "$549.95",
            sku: "HUS-320IL-230IB",
            description: "Kit Trimmer + Soplador a batería. Todo lo que necesitas para el jardín.",
            image: `${CDN}/grass-trimmers/photos/feature/sm-202463.webp?v=fd8127e0e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 122LKP",
            price: "$399.95",
            sku: "HUS-122LKP",
            description: "Podadora de altura. Alcance hasta 12 pies, cadena X-CUT® y lubricación automática.",
            image: `${CDN}/combi-trimmer-attachments/photos/studio/zy-422516.webp?v=8699ce9fe00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
        ],
      },
      // ── 3. Chainsaws ──
      {
        name: "Chainsaws",
        products: [
          {
            name: "562 XP® Mark II",
            price: "$999.95",
            sku: "HUS-562XP",
            description: "Profesional, 4.7 hp, 59.8 cm³. Alta capacidad de corte y diseño liviano.",
            image: `${CDN}/chainsaws/photos/studio/c/cw/cw-214781.webp?v=5a4a2f88e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "460 Rancher",
            price: "$699.95",
            sku: "HUS-460R",
            description: "Uso rudo, 3.62 hp, 60.3 cm³. Motor X-TORQ® con alto torque.",
            image: `${CDN}/chainsaws/photos/studio/d/df/df-247350.webp?v=25c20f02e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "455 Rancher",
            price: "$629.95",
            sku: "HUS-455R",
            description: "Uso rudo, 3.5 hp, 55.5 cm³. Potente y fácil de manejar.",
            image: `${CDN}/chainsaws/photos/studio/h/hc/hc-614481.webp?v=54d308cfe00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 440",
            price: "$479.95",
            sku: "HUS-440",
            description: "Uso general, 2.4 hp, 40.9 cm³. Motor X-TORQ®, LowVib® y Smart Start®.",
            image: `${CDN}/chainsaws/photos/studio/h/ht/ht-862792.webp?v=e039c778e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 130",
            price: "$369.95",
            sku: "HUS-130",
            description: "Uso ocasional, 2 hp, 38 cm³. X-TORQ®, LowVib® y Air Purge.",
            image: `${CDN}/chainsaws/photos/studio/h/h110/04/h110-0479.webp?v=87270492e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Power Axe 350i",
            price: "$549.95",
            sku: "HUS-350I",
            description: "Batería, equivalente 40cc. Potencia sin emisiones directas.",
            image: `${CDN}/chainsaws/photos/studio/p/ph/ph-010507.webp?v=f8f3dcd9e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Power Axe 225i",
            price: "$449.95",
            sku: "HUS-225I",
            description: "Batería, ligera. 15% más liviana con sistema de enfriamiento activo.",
            image: `${CDN}/chainsaws/photos/studio/c/cc/cc-692911.webp?v=109216e5e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
        ],
      },
      // ── 4. Trimmer Hedgers ──
      {
        name: "Trimmer Hedgers",
        products: [
          {
            name: "Husqvarna 525HE4",
            price: "$659.95",
            sku: "HUS-525HE4",
            description: 'Altura, cuchilla 24". Motor X-TORQ®, Smart Start® y barra ajustable.',
            image: `${CDN}/hedge-trimmers/photos/studio/h210-0775.webp?v=da01002ce00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 525HE3",
            price: "$599.95",
            sku: "HUS-525HE3",
            description: 'Altura, cuchilla 24". Motor X-TORQ®, Smart Start® y barra ajustable.',
            image: `${CDN}/hedge-trimmers/photos/studio/h210-0774.webp?v=dc089be00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 525HF3S",
            price: "$579.95",
            sku: "HUS-525HF3S",
            description: 'Profesional, cuchilla 25.5". Peso ligero, barra larga y engranajes duraderos.',
            image: `${CDN}/hedge-trimmers/photos/studio/h210-0447.webp?v=8146577e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 322HD60",
            price: "$499.95",
            sku: "HUS-322HD60",
            description: 'Profesional, cuchilla 24". Acero endurecido, Smart Start® y mango ajustable.',
            image: `${CDN}/hedge-trimmers/photos/studio/h210-0732.webp?v=ed5ab979e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 122HD60",
            price: "$419.95",
            sku: "HUS-122HD60",
            description: "Ligero, uso doméstico. LowVib®, Smart Start® y Air Purge.",
            image: `${CDN}/hedge-trimmers/photos/studio/h210-0299.webp?v=d4968330e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
        ],
      },
      // ── 5. Tractors ──
      {
        name: "Tractors",
        products: [
          {
            name: 'Husqvarna TS 140X (54")',
            price: "$4,799.95",
            sku: "HUS-TS140X-54",
            description: 'Nuevo lanzamiento. Corte 54", 24 hp. Air Induction™ y asiento High-Back 18".',
            image: `${CDN}/garden-tractors/photos/studio/l/lw/lw-664937.webp?v=b2ae9fa8e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: 'Husqvarna TS 140X (48")',
            price: "$4,399.95",
            sku: "HUS-TS140X-48",
            description: 'Nuevo lanzamiento. Corte 48", 22 hp. Air Induction™ y deck reforzado.',
            image: `${CDN}/garden-tractors/photos/studio/l/lw/lw-664937.webp?v=b2ae9fa8e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: 'Husqvarna TS 140X (42")',
            price: "$3,999.95",
            sku: "HUS-TS140X-42",
            description: 'Nuevo lanzamiento. Corte 42", 22 hp. Diseño compacto y cómodo.',
            image: `${CDN}/garden-tractors/photos/studio/l/lw/lw-664937.webp?v=b2ae9fa8e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna TS 120",
            price: "$3,699.95",
            sku: "HUS-TS120",
            description: "Modelo de entrada. Air Induction™, eje frontal de hierro fundido.",
            image: `${CDN}/garden-tractors/photos/studio/l/lw/lw-664937.webp?v=b2ae9fa8e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
        ],
      },
      // ── 6. Zero Turn ──
      {
        name: "Zero Turn",
        products: [
          {
            name: "Z254F Special Edition",
            price: "$5,299.95",
            sku: "HUS-Z254F",
            description: '54" corte, 23.1 hp Kawasaki. ClearCut™ Fabricated Deck y marco ultra-duradero.',
            image: `${CDN}/zero-turn-mowers/photos/studio/b/bn/bn-092762.webp?v=7960beee00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Z248F Special Edition",
            price: "$4,999.95",
            sku: "HUS-Z248F",
            description: '48" corte, 21.5 hp Kawasaki. ClearCut™ Fabricated Deck y marco ultra-duradero.',
            image: `${CDN}/zero-turn-mowers/photos/studio/j/jx/jx-395475.webp?v=b686b6c2e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Z242F Special Edition",
            price: "$4,699.95",
            sku: "HUS-Z242F",
            description: '42" corte, 21.5 hp Kawasaki. ClearCut™ Fabricated Deck y marco ultra-duradero.',
            image: `${CDN}/zero-turn-mowers/photos/studio/o/oz/oz-702461.webp?v=e2590e99e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
        ],
      },
      // ── 7. Robot Lawn Mowers ──
      {
        name: "Robot Lawn Mowers",
        products: [
          {
            name: "Automower® 435 iQ AWD",
            price: "$4,999.95",
            sku: "HUS-AM435",
            description: "Tracción total. Pendientes hasta 70%, navegación EPOS® wire-free.",
            image: `${CDN}/robotic-mowers/photos/studio/l/la/la-734523.webp?v=29f1a236e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Automower® 440 iQ",
            price: "$4,299.95",
            sku: "HUS-AM440",
            description: "Hasta 2 acres. Wire-free con mapeo virtual, fácil mantenimiento.",
            image: `${CDN}/robotic-mowers/photos/studio/q/qr/qr-130527.webp?v=32d99e77e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Automower® 420 iQ",
            price: "$3,499.95",
            sku: "HUS-AM420",
            description: "Hasta 1 acre. Wire-free con EPOS®, Automower® Connect App.",
            image: `${CDN}/robotic-mowers/photos/studio/q/qr/qr-130527.webp?v=32d99e77e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Automower® 410 iQ",
            price: "$2,999.95",
            sku: "HUS-AM410",
            description: "Hasta 0.5 acres. Wire-free con EPOS®, perfecto para jardines medianos.",
            image: `${CDN}/robotic-mowers/photos/studio/m/my/my-602420.webp?v=cdb97972e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Automower® 520",
            price: "$999.95",
            sku: "HUS-AM520",
            description: "Modelo comercial. Diseñado para uso profesional y áreas grandes.",
            image: `${CDN}/robotic-mowers/photos/studio/h/h310/16/h310-1659.webp?v=b74d40f2e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
        ],
      },
    ],
  },
  {
    id: "makita",
    name: "Makita",
    accent: "border-teal-500",
    badge: "bg-teal-500/10 text-teal-600",
    categories: [
      {
        name: "Rotary Hammers",
        products: [
          { name: "Makita HR4041C", price: "$634.95", sku: "MAK-HR4041C", description: '1-9/16" Rotary Hammer, accepts Spline bits. Potente para concreto y mampostería.' },
          { name: "Makita HR2641X1", price: "$299.95", sku: "MAK-HR2641X1", description: '8 Amp SDS-Plus Rotary Hammer + 4-1/2" Angle Grinder Kit. Combo versátil.' },
          { name: "Makita HR2811F", price: "$394.95", sku: "MAK-HR2811F", description: '1-1/8" Rotary Hammer, SDS-PLUS bits. Ideal para perforación pesada.' },
          { name: "Makita XRH04Z", price: "$229.95", sku: "MAK-XRH04Z", description: '18V LXT 7/8" Cordless SDS-Plus Rotary Hammer. Sin cable, máxima movilidad.' },
        ],
      },
      {
        name: "Demolition Hammers",
        products: [
          { name: "Makita HM1307CB", price: "$1,359.95", sku: "MAK-HM1307CB", description: '35 lb. Demolition Hammer, 14 Amp, 1-1/8" Hex, velocidad variable con LED.' },
          { name: "Makita HM0810B", price: "$589.95", sku: "MAK-HM0810B", description: "13 lb. Demolition Hammer, Spline Bits. Compacto y potente." },
          { name: "Makita HM1211B", price: "$879.95", sku: "MAK-HM1211B", description: '20 lb. Demolition Hammer, 3/4" Hex bits. Para trabajos de demolición mediana.' },
          { name: "Makita HM1214C", price: "$1,199.95", sku: "MAK-HM1214C", description: "27 lb. AVT Demolition Hammer, SDS-MAX bits. Anti-vibración avanzada." },
        ],
      },
      {
        name: "Garden Equipment",
        products: [
          { name: "Makita XUX02SM1X1", price: "$299.95", sku: "MAK-XUX02SM1X1", description: '18V LXT Brushless Couple Shaft Kit con 13" String Trimmer (4.0Ah).' },
          { name: "Makita XUX02SM1X3", price: "$349.95", sku: "MAK-XUX02SM1X3", description: '18V LXT Brushless Couple Shaft Kit con 13" String Trimmer & Blower.' },
          { name: "Makita XUX02SM1X4", price: "$289.95", sku: "MAK-XUX02SM1X4", description: '18V LXT Brushless Couple Shaft Kit con String Trimmer & 10" Pole Saw.' },
          { name: "Makita XUX02SM1X5", price: "$499.95", sku: "MAK-XUX02SM1X5", description: "18V LXT Brushless Kit con Trimmer, Pole Saw & Hedge Trimmer." },
          { name: "Makita XUX02SM1X6", price: "$599.95", sku: "MAK-XUX02SM1X6", description: "18V LXT Kit completo: Trimmer, Pole Saw, Hedge Trimmer & Blower." },
          { name: "Makita XBU03SM1", price: "$299.95", sku: "MAK-XBU03SM1", description: "18V LXT Brushless Cordless Leaf Blower Kit. 116 MPH, 459 CFM." },
          { name: "Makita XCU10SM1", price: "$319.95", sku: "MAK-XCU10SM1", description: '18V LXT 10" Brushless Battery Top Handle Chain Saw.' },
        ],
      },
      {
        name: "Drills & Drivers",
        products: [
          { name: "Makita XPH12Z", price: "$159.95", sku: "MAK-XPH12Z", description: '18V LXT 1/2" Brushless Cordless Hammer Driver-Drill. Tool Only.' },
          { name: "Makita XDT14Z", price: "$169.95", sku: "MAK-XDT14Z", description: '18V LXT Brushless 1/4" Quick-Shift 3-Speed Impact Driver.' },
          { name: "Makita XFD10SY", price: "$179.95", sku: "MAK-XFD10SY", description: '18V LXT Compact 1/2" Variable Speed Driver Drill Kit (1.5 Ah).' },
          { name: "Makita XDT11SY", price: "$179.95", sku: "MAK-XDT11SY", description: '18V LXT Compact 1/4" Variable Speed Impact Driver Kit (1.5 Ah).' },
          { name: "Makita XT296SMR", price: "$289.95", sku: "MAK-XT296SMR", description: "18V LXT Brushless Hammer Drill & Impact Driver Combo Kit (2-Tool)." },
        ],
      },
      {
        name: "Impact Wrenches & Ratchets",
        products: [
          { name: "Makita XWT08Z", price: "$339.95", sku: "MAK-XWT08Z", description: '18V LXT Brushless High Torque 1/2" Impact Wrench. Tool-Only.' },
          { name: "Makita XWT08T", price: "$629.95", sku: "MAK-XWT08T", description: '18V LXT Brushless High Torque 1/2" Impact Wrench Kit con 2 baterías.' },
          { name: "Makita XWT04S1", price: "$289.95", sku: "MAK-XWT04S1", description: '18V LXT Cordless 1/2" Sq. Drive Impact Wrench Kit (3.0Ah).' },
          { name: "Makita XRW01Z", price: "$199.95", sku: "MAK-XRW01Z", description: '18V LXT Cordless 3/8" & 1/4" Square Drive Ratchet. Tool-Only.' },
        ],
      },
      {
        name: "Grinders",
        products: [
          { name: "Makita 9557PB", price: "$109.95", sku: "MAK-9557PB", description: '4-1/2" Paddle Switch Angle Grinder. Compacto y confiable.' },
          { name: "Makita GA7021", price: "$229.95", sku: "MAK-GA7021", description: '7" Angle Grinder con AC/DC Switch. Para corte y desbaste pesado.' },
          { name: "Makita XAG26Z", price: "$209.95", sku: "MAK-XAG26Z", description: '18V LXT 5" Paddle X-LOCK Angle Grinder con AFT. Tool-Only.' },
        ],
      },
      {
        name: "Saws & Cutters",
        products: [
          { name: "Makita LW1401", price: "$314.95", sku: "MAK-LW1401", description: '14" Cut-off Saw. Para corte de metal y materiales duros.' },
          { name: "Makita XSH04ZB", price: "$209.95", sku: "MAK-XSH04ZB", description: '18V 6-1/2" LXT Sub-Compact Brushless Circular Saw. Tool Only.' },
          { name: "Makita XEC01PT1", price: "$1,099.95", sku: "MAK-XEC01PT1", description: '18V X2 LXT Brushless 9" Power Cutter Kit con 4 baterías.' },
          { name: "Makita GEC01PL", price: "$2,269.95", sku: "MAK-GEC01PL", description: '40V max X2 XGT 14" Power Cutter Kit. Máxima potencia sin cable.' },
        ],
      },
    ],
  },
  {
    id: "milwaukee",
    name: "Milwaukee",
    accent: "border-red-600",
    badge: "bg-red-600/10 text-red-600",
    categories: [],
  },
];
