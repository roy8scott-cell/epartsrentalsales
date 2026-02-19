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
const MCDN = "https://cdn.makitatools.com/apps/cms/img";

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
          { name: "Makita HR4041C", price: "$634.95", sku: "MAK-HR4041C", description: '1-9/16" Rotary Hammer, accepts Spline bits. 11 AMP motor delivers 230-460 RPM and 1,300-2,600 BPM. Constant speed control maintains speed under load.', image: `${MCDN}/hr4/97fbfe39-1630-4576-ba10-d85cd6e8519c_hr4041c_k_1500px.png` },
          { name: "Makita HR2641X1", price: "$299.95", sku: "MAK-HR2641X1", description: '8 Amp 1 in. Corded SDS-Plus Concrete/Masonry AVT Rotary Hammer Drill with 4-1/2 in. Corded Angle Grinder with Hard Case.', image: `${MCDN}/hr2/7dd522a4-2814-425f-b4f2-2791d2a2bb3c_hr2641x1_k_1500px.png` },
          { name: "Makita HR2811F", price: "$394.95", sku: "MAK-HR2811F", description: '1-1/8" SDS-PLUS Rotary Hammer. 7.0 AMP motor delivers 0-1,100 RPM and 0-4,500 BPM. 3-mode operation: Rotation Only, Hammering with Rotation, or Hammering Only.', image: `${MCDN}/hr2/64fcb31b-f282-4009-aab6-a42956b2b963_hr2811f_k_1500px.png` },
          { name: "Makita XRH04Z", price: "$229.95", sku: "MAK-XRH04Z", description: '18V LXT Lithium-Ion 7/8 in. Cordless SDS-Plus Concrete/Masonry Rotary Hammer Drill (Tool-Only).', image: `${MCDN}/xrh/42c3feff-641f-4aa1-b070-8cd163df8220_xrh04z_p_1500px.png` },
        ],
      },
      {
        name: "Demolition Hammers",
        products: [
          { name: "Makita HM1307CB", price: "$1,359.95", sku: "MAK-HM1307CB", description: '14 Amp 1-1/8 in. Hex Corded Variable Speed 35 lb. Demolition Hammer w/ Soft Start, LED, (1) Bull Point and Hard Case.', image: `${MCDN}/hm1/01b6d0e9-0260-439a-abc4-442b08ef7d56_hm1307cb_k_1500px.png` },
          { name: "Makita HM0810B", price: "$589.95", sku: "MAK-HM0810B", description: '13 lb. Demolition Hammer, accepts 3/4" Hex bits. 8.3 AMP motor delivers 2,900 BPM. Lock-on button for continuous use, one-touch tool retainer for quick bit changes.', image: `${MCDN}/hm0/58c3f24e-58a6-4d2b-a667-06c85ca34852_hm0810b_k_1500px.png` },
          { name: "Makita HM1211B", price: "$879.95", sku: "MAK-HM1211B", description: '20 lb. Demolition Hammer, accepts 3/4" Hex bits. 10 AMP motor for faster and more efficient operation. D-shaped grip side handle absorbs vibration and secures in 4 positions.', image: `${MCDN}/hm1/2a5d5d8c-2109-4057-b4d2-284ee9669e81_hm1211b_k_1500px.png` },
          { name: "Makita HM1214C", price: "$1,199.95", sku: "MAK-HM1214C", description: '27 lb. SDS-MAX AVT Demolition Hammer. 14 AMP motor for demanding jobs. Makita exclusive AVT counterbalance system reduces vibration. Variable speed control dial.', image: `${MCDN}/hm1/975f21eb-27a7-42ee-b648-1de2088de441_hm1214c_k_1500px.png` },
        ],
      },
      {
        name: "Garden Equipment",
        products: [
          { name: "Makita XUX02SM1X1", price: "$299.95", sku: "MAK-XUX02SM1X1", description: 'LXT 18V Lithium-Ion Brushless Cordless Couple Shaft Power Head Kit w/13 in. String Trimmer Attachment (4.0Ah).', image: `${MCDN}/xux/309b5b6a-7289-4af9-a762-972b22ce036b_xux02sm1x1_k_1500px.png` },
          { name: "Makita XUX02SM1X3", price: "$349.95", sku: "MAK-XUX02SM1X3", description: 'LXT 18V Brushless Cordless Couple Shaft Power Head Kit with 13 in. String Trimmer and Leaf Blower Attachments, 4.0Ah.', image: `${MCDN}/xux/cea9295f-f8d9-426e-a3cd-7cd101ca96d8_xux02sm1x3_k_1500px.png` },
          { name: "Makita XUX02SM1X4", price: "$289.95", sku: "MAK-XUX02SM1X4", description: 'LXT 18V Lithium-Ion Brushless Cordless Couple Shaft Power Head Kit w/String Trimmer & 10 in. Pole Saw Attachments 4.0Ah.', image: `${MCDN}/xux/34860bcf-5bc4-46d4-aadd-e35aafac37fd_xux02sm1x4_k_1500px.png` },
          { name: "Makita XUX02SM1X5", price: "$499.95", sku: "MAK-XUX02SM1X5", description: '18V LXT Brushless Couple Shaft Power Head Kit w/String Trimmer, Pole Saw & Articulating Hedge Trimmer Attachments 4.0Ah.', image: `${MCDN}/xux/1a9bcd20-339f-45d3-972e-1f119582e25c_xux02sm1x5_k_1500px.png` },
          { name: "Makita XUX02SM1X6", price: "$599.95", sku: "MAK-XUX02SM1X6", description: '18V LXT Couple Shaft Power Head Kit w/String Trimmer, Pole Saw, Articulating Hedge Trimmer & Blower Attachments, 4.0Ah.', image: `${MCDN}/xux/44a04770-a9f9-41f7-90c6-e3dc982d0a17_xux02sm1x6_k_1500px.png` },
          { name: "Makita XBU03SM1", price: "$299.95", sku: "MAK-XBU03SM1", description: "116 MPH 459 CFM 18V LXT Lithium-Ion Brushless Cordless Leaf Blower Kit.", image: `${MCDN}/xbu/b81aab02-5c31-432a-ab23-208f293d7f32_xbu03sm1_k_1500px.png` },
          { name: "Makita XCU10SM1", price: "$319.95", sku: "MAK-XCU10SM1", description: 'LXT 10 in. 18V Lithium-Ion Brushless Battery Top Handle Chain Saw (Tool-Only).', image: `${MCDN}/xcu/a8d79846-8a6e-4d5a-966a-8b57d25533dc_xcu10sm1_k_1500px.png` },
        ],
      },
      {
        name: "Drills & Drivers",
        products: [
          { name: "Makita XPH12Z", price: "$159.95", sku: "MAK-XPH12Z", description: '18V LXT Lithium-Ion 1/2 in. Brushless Cordless Hammer Driver-Drill (Tool Only).', image: `${MCDN}/xph/d95a3190-0b96-4e7b-85ef-9c139dbb28b5_xph12z_p_1500px.png` },
          { name: "Makita XDT14Z", price: "$169.95", sku: "MAK-XDT14Z", description: '18V LXT Lithium-Ion Brushless 1/4 in. Cordless Quick-Shift Mode 3-Speed Impact Driver (Tool Only).', image: `${MCDN}/xdt/7cb31bcc-d235-4ba7-9670-c42276973981_xdt14z_p_1500px.png` },
          { name: "Makita XFD10SY", price: "$179.95", sku: "MAK-XFD10SY", description: '1.5 Ah 18V LXT Lithium-Ion Compact Cordless 1/2 in. Variable Speed Driver Drill Kit with Tool Bag.', image: `${MCDN}/xfd/65439e2c-07a4-4112-a1b4-ed788831f336_xfd10sy_k_1500px.png` },
          { name: "Makita XDT11SY", price: "$179.95", sku: "MAK-XDT11SY", description: '1.5 Ah 18V LXT Lithium-Ion Compact Cordless 1/4 in. Variable Speed Impact Driver Kit.', image: `${MCDN}/xdt/a9bfb623-1228-4e13-9ea8-811b9e6e3fd3_xdt11sy_k_1500px.png` },
          { name: "Makita XT296SMR", price: "$289.95", sku: "MAK-XT296SMR", description: '18V LXT Lithium-Ion Brushless Cordless Hammer Drill and Impact Driver Combo Kit (2-Tool) w/ (2) 4Ah Batteries, Bag.', image: `${MCDN}/xt2/4b08398b-cce8-4be3-92b0-1c77bcdbc3d8_xt296smr_k_1500px.png` },
        ],
      },
      {
        name: "Impact Wrenches & Ratchets",
        products: [
          { name: "Makita XWT08Z", price: "$339.95", sku: "MAK-XWT08Z", description: '18V LXT Lithium-Ion Brushless Cordless High Torque 1/2 in. 3-Speed Drive Impact Wrench (Tool-Only), delivers 740 ft.lbs. of Fastening Torque and 1,180 ft.lbs. of Nut-Busting Torque.', image: `${MCDN}/xwt/9b2a2d7f-cea4-4ac6-af2d-0d25742e8790_xwt08z_p_1500px.png` },
          { name: "Makita XWT08T", price: "$629.95", sku: "MAK-XWT08T", description: '18V LXT Lithium-Ion Brushless Cordless High Torque 1/2 in. Square Drive Impact Wrench w/ (2) Batteries 5.0Ah, Bag, delivers 740 ft.lbs. of Fastening Torque and 1,180 ft.lbs. of Nut-Busting Torque.', image: `${MCDN}/xwt/3183a24f-2f8f-4233-ac8f-dc53721f1932_xwt08t_k_1500px.png` },
          { name: "Makita XWT04S1", price: "$289.95", sku: "MAK-XWT04S1", description: '18V LXT Lithium-Ion Cordless 1/2 in. Sq. Drive Impact Wrench Kit (3.0Ah). Delivers 325 ft.lbs. of Fastening Torque, 2,200 IPM and 1,600 RPM. Weighs only 7.5 lbs. with battery.', image: `${MCDN}/xwt/28c8f88a-c0b7-4b61-839c-b2e669ab9694_xwt04s1_k_1500px.png` },
          { name: "Makita XRW01Z", price: "$199.95", sku: "MAK-XRW01Z", description: '3/8 in./1/4 in. 18V LXT Lithium-Ion Cordless Square Drive Ratchet (Tool-Only). Delivers 35 ft.lbs. of Max Torque, 0-800 RPM. Interchangeable 3/8" and 1/4" anvils. Low profile design for compact areas.', image: `${MCDN}/xrw/5351f1a0-223b-402f-94dc-de8ab898c901_xrw01z_p_1500px.png` },
        ],
      },
      {
        name: "Grinders",
        products: [
          { name: "Makita 9557PB", price: "$109.95", sku: "MAK-9557PB", description: '4-1/2" Paddle Switch Angle Grinder with AC/DC Switch. 7.5 AMP motor delivers 11,000 RPM. Large paddle switch for easy operation, weighs only 4.5 lbs.', image: `${MCDN}/955/95b8b5bb-f9cd-42a0-9331-eb3de17cf43e_9557pb_p_1500px.png` },
          { name: "Makita GA7021", price: "$229.95", sku: "MAK-GA7021", description: '7" Angle Grinder with AC/DC Switch. 15 AMP motor delivers 6,600 RPM. Rubberized soft grip handle, labyrinth construction with zig-zag varnish for longer tool life.', image: `${MCDN}/ga7/ef50e1f5-ee92-48ae-a32c-0d3175abf62f_ga7021_p_1500px.png` },
          { name: "Makita XAG26Z", price: "$209.95", sku: "MAK-XAG26Z", description: '18V LXT Brushless Cordless 4-1/2" / 5" Paddle Switch X-LOCK Angle Grinder with AFT (Active Feedback-sensing Technology). Tool Only. One-touch X-LOCK accessory changes.', image: `${MCDN}/xag/bd2a2a59-1098-4bc7-b31e-8954e8e96bb2_xag26z_p_1500px.png` },
        ],
      },
      {
        name: "Saws & Cutters",
        products: [
          { name: "Makita 5007F", price: "$189.95", sku: "MAK-5007F", description: '7-1/4" Circular Saw. Powerful 15 AMP motor delivers 5,800 RPM. Two built-in LED lights illuminate the line of cut. Heavy gauge aluminum wraparound base.', image: `${MCDN}/500/4573e931-7872-4e66-9a2c-a6d5988f8f10_5007f_p_1500px.png` },
          { name: "Makita 5007MG", price: "$239.95", sku: "MAK-5007MG", description: '7-1/4" Magnesium Circular Saw. 15 AMP motor cuts through the densest lumber. Magnesium components create a lightweight saw (10.6 lbs.) that\'s jobsite tough.', image: `${MCDN}/500/92d756ee-4919-40c1-9306-a258a6246968_5007mg_k_1500px.png` },
          { name: "Makita LW1401", price: "$314.95", sku: "MAK-LW1401", description: '14" Cut-Off Saw. Powerful 15 AMP motor delivers 3,800 RPM. Adjustable spark guard, fence adjustment up to 45° for various material sizes.', image: `${MCDN}/lw1/b6168d1b-e173-49d5-9746-e97a65b0b71d_lw1401_p_1500px.png` },
          { name: "Makita XSH04ZB", price: "$209.95", sku: "MAK-XSH04ZB", description: '18V 6-1/2 in. LXT Sub-Compact Lithium-Ion Brushless Cordless Circular Saw (Tool Only).', image: `${MCDN}/xsh/08251556-83ad-480d-9406-8dd5940ef32d_xsh04zb_p_1500px.png` },
          { name: "Makita JR3051T", price: "$169.95", sku: "MAK-JR3051T", description: 'Recipro Saw, 12 AMP motor delivers 0-3,000 SPM. Well balanced design (only 7.3 lbs. and 17-5/8" long) for reduced operator fatigue. Tool-less blade change system.', image: `${MCDN}/jr3/b6e63b16-4bf1-43ac-97ba-06c1af1e1a0d_jr3051t_p_1500px.png` },
          { name: "Makita XRJ01Z", price: "$149.95", sku: "MAK-XRJ01Z", description: '18V LXT Lithium-Ion Cordless Compact Recipro Saw (Tool Only). 0-3,000 SPM with 1/2" stroke. Dual-position on/off switch. Only 3.9 lbs. with battery.', image: `${MCDN}/xrj/ef94fff9-bde1-460c-9138-9865f3f250ad_xrj01z_p_1500px.png` },
          { name: "Makita XRJ04Z", price: "$159.95", sku: "MAK-XRJ04Z", description: '18V LXT Lithium-Ion Cordless Recipro Saw (Tool Only). 0-2,800 SPM with 1-1/4" stroke for faster cutting. Tool-less blade change system.', image: `${MCDN}/xrj/6df2f998-1524-44c9-a9d0-06322d4c67ef_xrj04z_p_1500px.png` },
          { name: "Makita XEC01PT1", price: "$1,099.95", sku: "MAK-XEC01PT1", description: '36V (18V X2) LXT Brushless 9" Power Cutter Kit with AFT, Electric Brake, 4 Batteries (5.0 Ah). Cuts up to 3-5/8" deep with a 9" diamond blade.', image: `${MCDN}/xec/cc62df9a-71ab-4a76-850e-5aaeddfdddba_xec01pt1_k_1500px.png` },
          { name: "Makita GEC01PL", price: "$2,269.95", sku: "MAK-GEC01PL", description: '80V max (40V max X2) XGT Brushless 14" Power Cutter Kit with AFT, Electric Brake (8.0Ah). Cuts up to 5" deep with a 14" diamond blade. Zero emissions.', image: `${MCDN}/gec/e931e332-d5a0-4310-b2b0-bfc88f701eb5_gec01pl_k_1500px.png` },
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
