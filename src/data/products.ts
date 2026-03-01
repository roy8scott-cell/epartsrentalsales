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
const HCDN = "https://images.thdstatic.com/productImages";
const ACDN = "https://www.acmetools.com/dw/image/v2/BHBS_PRD/on/demandware.static/-/Sites-acme-catalog-m-en/default";
const TCDN = "https://toolup.com/cdn/shop/files";

export const brands: Brand[] = [
  {
    id: "husqvarna",
    name: "Husqvarna",
    accent: "border-orange-500",
    badge: "bg-orange-500/10 text-orange-600",
    categories: [
      // ── 1. Sopladoras ──
      {
        name: "Sopladoras",
        products: [
          {
            name: "Husqvarna 590BTS",
            price: "$949.95",
            sku: "HUS-590BTS",
            description: "World's most powerful backpack blower. 56N blow force, 1,245 CFM at 216 MPH. AutoTune, LowVib®, padded harness with hip belt. Start button for easy starting.",
            image: `${CDN}/blowers/photos/studio/at-683132.webp?v=ebfc1302e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 590BFS",
            price: "$949.95",
            sku: "HUS-590BFS",
            description: "56N blow force, 1,245 CFM. Multi-speed control with start button. AutoTune, LowVib®, padded harness with hip belt.",
            image: `${CDN}/blowers/photos/studio/zb-342365.webp?v=9e01c1cfe00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 560BTS",
            price: "$569.95",
            sku: "HUS-560BTS",
            description: "Powerful commercial backpack blower. 30N blow force, X-Torq® engine. Efficient fan design with high air flow and speed. Commercial grade air filter, wide shoulder strap harness.",
            image: `${CDN}/blowers/photos/studio/h210-0313.webp?v=dbab46bde00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 150BT",
            price: "$469.95",
            sku: "HUS-150BT",
            description: "Husqvarna's best-selling backpack blower. 22N blow force, 765 CFM at 270 MPH. Ergonomic harness system with hip belt. Air purge for easy starting.",
            image: `${CDN}/blowers/photos/studio/bb-657339.webp?v=3b68b0e6e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 125B",
            price: "$299.95",
            sku: "HUS-125B",
            description: "Powerful lightweight handheld blower. 470 CFM at only 9.4 lbs. Ergonomic balanced design. Auto return stop switch and air purge for easy starting.",
            image: `${CDN}/blowers/photos/studio/ll-208571.webp?v=9b95d795e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
        ],
      },
      // ── 2. Desbrozadoras y Trimmers ──
      {
        name: "Desbrozadoras y Trimmers",
        products: [
          {
            name: "Husqvarna 545FR",
            price: "$999.95",
            sku: "HUS-545FR",
            description: "Professional forestry brushcutter. 2.8 hp, X-Torq® engine. Includes grass blade, saw blade and trimmer head. Balance X harness for all-day comfort.",
            image: `${CDN}/brushcutters/photos/studio/h210-0417.webp?v=e69c026548b61144&format=WEBP_SQUARE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 336FR",
            price: "$699.95",
            sku: "HUS-336FR",
            description: "Versatile brushcutter. 1.7 hp, X-Torq® engine with Balance 35 harness. Adjustable handle bar for operator comfort.",
            image: `${CDN}/brushcutters/photos/studio/h210-0310.webp?v=92d62b4de00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 535LST",
            price: "$629.95",
            sku: "HUS-535LST",
            description: "Professional gas trimmer. 2.15 hp with high torque for heavy-duty use. X-Torq® engine, Smart Start® technology.",
            image: `${CDN}/grass-trimmers/photos/studio/h210-0740.webp?v=3fbde939e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 535LS",
            price: "$579.95",
            sku: "HUS-535LS",
            description: "Professional gas trimmer. 2.15 hp with reinforced gearbox for heavy-duty commercial use. X-Torq® engine.",
            image: "https://sleequipment.com/cdn/shop/files/535ls.jpg?v=1766778948",
          },
          {
            name: "Husqvarna 525LST",
            price: "$469.95",
            sku: "HUS-525LST",
            description: "Professional gas trimmer. 1.34 hp with high torque. Intuitive controls, X-Torq® engine, Smart Start® technology.",
            image: `${CDN}/grass-trimmers/photos/studio/nb-080737.webp?v=7a903385e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 525L",
            price: "$419.95",
            sku: "HUS-525L",
            description: "Professional gas trimmer. 1.21 hp. Intuitive controls, X-Torq® engine, Smart Start® for easy starting.",
            image: `${CDN}/grass-trimmers/photos/studio/h210-0431b.webp?v=d304b40be00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 130L",
            price: "$349.95",
            sku: "HUS-130L",
            description: "Gas trimmer. 1 hp. Lightweight and easy to start, ideal for residential use.",
            image: `${CDN}/grass-trimmers/photos/studio/qn-246565.webp?v=7349312de00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Combi Switch + 330iKL",
            price: "$489.95",
            sku: "HUS-330IKL",
            description: "Battery-powered Combi Switch with string trimmer attachment. Versatile modular system, battery and charger included.",
            image: `${CDN}/combi-trimmer-attachments/photos/studio/lz-341323.webp?v=944bcbb4e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Combi Switch + 330iKP",
            price: "$499.95",
            sku: "HUS-330IKP",
            description: "Battery-powered Combi Switch with pole saw attachment. Modular system for pruning and trimming, battery and charger included.",
            image: `${CDN}/combi-trimmer-attachments/photos/studio/xq-090418.webp?v=cf9d11f5e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "320iL + 230iB Bundle",
            price: "$549.95",
            sku: "HUS-320IL-230IB",
            description: "Battery string trimmer + blower bundle. Everything you need for yard maintenance in one kit.",
            image: `${CDN}/grass-trimmers/photos/feature/sm-202463.webp?v=fd8127e0e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 122LKP",
            price: "$399.95",
            sku: "HUS-122LKP",
            description: "Pole pruner. Reach up to 12 ft, X-CUT® chain with automatic oiler. Easy to use for overhead pruning.",
            image: `${CDN}/combi-trimmer-attachments/photos/studio/zy-422516.webp?v=8699ce9fe00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
        ],
      },
      // ── 3. Motosierras ──
      {
        name: "Motosierras",
        products: [
          {
            name: "562 XP® Mark II",
            price: "$999.95",
            sku: "HUS-562XP",
            description: "Professional chainsaw. 59.8cc, 4.7 hp. AutoTune, X-Torq® engine, Air Injection™ technology. High cutting capacity with lightweight design.",
            image: `${CDN}/chainsaws/photos/studio/c/cw/cw-214781.webp?v=5a4a2f88e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "460 Rancher",
            price: "$699.95",
            sku: "HUS-460R",
            description: "Professional power at home. 60.3cc, 3.62 hp. X-Torq® engine delivers superior performance, increased fuel efficiency and low emissions. LowVib® technology.",
            image: `${CDN}/chainsaws/photos/studio/d/df/df-247350.webp?v=25c20f02e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "455 Rancher",
            price: "$629.95",
            sku: "HUS-455R",
            description: "Gold standard workhorse chainsaw. 55.5cc, 3.5 hp. X-Torq® engine, superior performance and fuel efficiency. LowVib® technology for comfort in demanding conditions.",
            image: `${CDN}/chainsaws/photos/studio/h/hc/hc-614481.webp?v=54d308cfe00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 440",
            price: "$479.95",
            sku: "HUS-440",
            description: "All-round chainsaw. 40.9cc, 2.4 hp. X-Torq® engine, LowVib® dampeners and Smart Start® for easy operation.",
            image: `${CDN}/chainsaws/photos/studio/h/ht/ht-862792.webp?v=e039c778e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 130",
            price: "$369.95",
            sku: "HUS-130",
            description: "Occasional use chainsaw. 38cc, 2 hp. X-Torq® engine, LowVib® technology and Air Purge for easy starting.",
            image: `${CDN}/chainsaws/photos/studio/h/h110/04/h110-0479.webp?v=87270492e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Power Axe 350i",
            price: "$549.95",
            sku: "HUS-350I",
            description: "Battery chainsaw, equivalent to 40cc gas. Powerful performance with zero direct emissions. Battery and charger included.",
            image: `${CDN}/chainsaws/photos/studio/p/ph/ph-010507.webp?v=f8f3dcd9e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Power Axe 225i",
            price: "$449.95",
            sku: "HUS-225I",
            description: "Lightweight battery chainsaw. 15% lighter with active cooling system. Zero direct emissions.",
            image: `${CDN}/chainsaws/photos/studio/c/cc/cc-692911.webp?v=109216e5e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
        ],
      },
      // ── 4. Podadoras de Seto ──
      {
        name: "Podadoras de Seto",
        products: [
          {
            name: "Husqvarna 525HE4",
            price: "$659.95",
            sku: "HUS-525HE4",
            description: 'Pole hedge trimmer, 24" cutter bar. X-Torq® engine, Smart Start® technology, adjustable cutter bar for professional use.',
            image: `${CDN}/hedge-trimmers/photos/studio/h210-0775.webp?v=da01002ce00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 525HE3",
            price: "$599.95",
            sku: "HUS-525HE3",
            description: 'Pole hedge trimmer, 24" cutter bar. X-Torq® engine, Smart Start® technology, adjustable cutter bar. High knife speed for professional users.',
            image: `${CDN}/hedge-trimmers/photos/studio/h210-0774.webp?v=dc089be00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 525HF3S",
            price: "$579.95",
            sku: "HUS-525HF3S",
            description: 'Professional hedge trimmer, 25.5" cutter bar. Lightweight with long bar and durable gears for extended use.',
            image: `${CDN}/hedge-trimmers/photos/studio/h210-0447.webp?v=8146577e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 322HD60",
            price: "$499.95",
            sku: "HUS-322HD60",
            description: 'Professional hedge trimmer, 24" cutter bar. Hardened steel blades, Smart Start® and adjustable rear handle.',
            image: `${CDN}/hedge-trimmers/photos/studio/h210-0732.webp?v=ed5ab979e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna 122HD60",
            price: "$419.95",
            sku: "HUS-122HD60",
            description: "Lightweight residential hedge trimmer. LowVib® technology, Smart Start® and Air Purge for easy starting.",
            image: `${CDN}/hedge-trimmers/photos/studio/h210-0299.webp?v=d4968330e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
        ],
      },
      // ── 5. Tractores ──
      {
        name: "Tractores",
        products: [
          {
            name: 'Husqvarna TS 140X (54")',
            price: "$4,799.95",
            sku: "HUS-TS140X-54",
            description: 'New release. 54" cutting width, 24 hp. Air Induction™ technology and 18" High-Back seat for all-day comfort.',
            image: `${CDN}/garden-tractors/photos/studio/a/au/au-139688.webp?format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: 'Husqvarna TS 140X (48")',
            price: "$4,399.95",
            sku: "HUS-TS140X-48",
            description: 'New release. 48" cutting width, 22 hp. Air Induction™ technology and reinforced cutting deck.',
            image: `${CDN}/garden-tractors/photos/studio/a/au/au-139688.webp?format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: 'Husqvarna TS 140X (42")',
            price: "$3,999.95",
            sku: "HUS-TS140X-42",
            description: 'New release. 42" cutting width, 22 hp. Compact and comfortable design for residential use.',
            image: `${CDN}/garden-tractors/photos/studio/a/au/au-139688.webp?format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Husqvarna TS 120",
            price: "$3,699.95",
            sku: "HUS-TS120",
            description: "Entry-level garden tractor. Air Induction™ technology, cast iron front axle for durability.",
            image: `${CDN}/garden-tractors/photos/studio/l/lw/lw-664937.webp?v=b2ae9fa8e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
        ],
      },
      // ── 6. Cortadoras Zero Turn ──
      {
        name: "Cortadoras Zero Turn",
        products: [
          {
            name: "Z254F Special Edition",
            price: "$5,299.95",
            sku: "HUS-Z254F",
            description: '54" ClearCut™ fabricated deck for superior cutting performance. 24 hp Kawasaki engine. Ultra-durable frame, ventilated seat and LED headlights.',
            image: `${CDN}/zero-turn-mowers/photos/studio/b/bn/bn-092762.webp?v=7960beee00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Z248F Special Edition",
            price: "$4,999.95",
            sku: "HUS-Z248F",
            description: '48" ClearCut™ fabricated deck for superior cutting performance. 21.5 hp Kawasaki engine. Ultra-durable frame, rugged casters.',
            image: `${CDN}/zero-turn-mowers/photos/studio/j/jx/jx-395475.webp?v=b686b6c2e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Z242F Special Edition",
            price: "$4,699.95",
            sku: "HUS-Z242F",
            description: '42" ClearCut™ fabricated deck for superior cutting performance. 21.5 hp Kawasaki engine. Ultra-durable frame, rugged casters.',
            image: `${CDN}/zero-turn-mowers/photos/studio/o/oz/oz-702461.webp?v=e2590e99e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
        ],
      },
      // ── 7. Cortadoras Robóticas ──
      {
        name: "Cortadoras Robóticas",
        products: [
          {
            name: "Automower® 435 iQ AWD",
            price: "$4,999.95",
            sku: "HUS-AM435",
            description: "All-Wheel Drive robotic mower. Handles slopes up to 70%, EPOS® wire-free navigation for hassle-free operation.",
            image: `${CDN}/robotic-mowers/photos/studio/l/la/la-734523.webp?v=29f1a236e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Automower® 440 iQ",
            price: "$4,299.95",
            sku: "HUS-AM440",
            description: "Covers up to 2 acres. Wire-free with virtual mapping, Automower® Connect App for easy management.",
            image: `${CDN}/robotic-mowers/photos/studio/q/qr/qr-130527.webp?v=32d99e77e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Automower® 420 iQ",
            price: "$3,499.95",
            sku: "HUS-AM420",
            description: "Covers up to 1 acre. Wire-free with EPOS® navigation, Automower® Connect App included.",
            image: `${CDN}/robotic-mowers/photos/studio/s/sm/sm-807077.webp?v=1b0d967be00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Automower® 410 iQ",
            price: "$2,999.95",
            sku: "HUS-AM410",
            description: "Covers up to 0.5 acres. Wire-free with EPOS® navigation, ideal for mid-size yards.",
            image: `${CDN}/robotic-mowers/photos/studio/m/my/my-602420.webp?v=cdb97972e00e823d&format=WEBP_LANDSCAPE_CONTAIN_MD`,
          },
          {
            name: "Automower® 520",
            price: "$999.95",
            sku: "HUS-AM520",
            description: "Commercial robotic mower. Designed for professional use and large areas with reliable autonomous operation.",
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
        name: "Martillos Rotatorios",
        products: [
          { name: "Makita HR4041C", price: "$634.95", sku: "MAK-HR4041C", description: '1-9/16" Rotary Hammer, accepts Spline bits. 11 AMP motor delivers 230-460 RPM and 1,300-2,600 BPM. Constant speed control maintains speed under load.', image: `${MCDN}/hr4/97fbfe39-1630-4576-ba10-d85cd6e8519c_hr4041c_k_1500px.png` },
          { name: "Makita HR2641X1", price: "$299.95", sku: "MAK-HR2641X1", description: '8 Amp 1 in. Corded SDS-Plus Concrete/Masonry AVT Rotary Hammer Drill with 4-1/2 in. Corded Angle Grinder with Hard Case.', image: `${MCDN}/hr2/7dd522a4-2814-425f-b4f2-2791d2a2bb3c_hr2641x1_k_1500px.png` },
          { name: "Makita HR2811F", price: "$394.95", sku: "MAK-HR2811F", description: '1-1/8" SDS-PLUS Rotary Hammer. 7.0 AMP motor delivers 0-1,100 RPM and 0-4,500 BPM. 3-mode operation: Rotation Only, Hammering with Rotation, or Hammering Only.', image: `${MCDN}/hr2/64fcb31b-f282-4009-aab6-a42956b2b963_hr2811f_k_1500px.png` },
          { name: "Makita XRH04Z", price: "$229.95", sku: "MAK-XRH04Z", description: '18V LXT Lithium-Ion 7/8 in. Cordless SDS-Plus Concrete/Masonry Rotary Hammer Drill (Tool-Only).', image: `${MCDN}/xrh/42c3feff-641f-4aa1-b070-8cd163df8220_xrh04z_p_1500px.png` },
        ],
      },
      {
        name: "Martillos Demoledores",
        products: [
          { name: "Makita HM1307CB", price: "$1,359.95", sku: "MAK-HM1307CB", description: '14 Amp 1-1/8 in. Hex Corded Variable Speed 35 lb. Demolition Hammer w/ Soft Start, LED, (1) Bull Point and Hard Case.', image: `${MCDN}/hm1/01b6d0e9-0260-439a-abc4-442b08ef7d56_hm1307cb_k_1500px.png` },
          { name: "Makita HM0810B", price: "$589.95", sku: "MAK-HM0810B", description: '13 lb. Demolition Hammer, accepts 3/4" Hex bits. 8.3 AMP motor delivers 2,900 BPM. Lock-on button for continuous use, one-touch tool retainer for quick bit changes.', image: `${MCDN}/hm0/58c3f24e-58a6-4d2b-a667-06c85ca34852_hm0810b_k_1500px.png` },
          { name: "Makita HM1211B", price: "$879.95", sku: "MAK-HM1211B", description: '20 lb. Demolition Hammer, accepts 3/4" Hex bits. 10 AMP motor for faster and more efficient operation. D-shaped grip side handle absorbs vibration and secures in 4 positions.', image: `${MCDN}/hm1/2a5d5d8c-2109-4057-b4d2-284ee9669e81_hm1211b_k_1500px.png` },
          { name: "Makita HM1214C", price: "$1,199.95", sku: "MAK-HM1214C", description: '27 lb. SDS-MAX AVT Demolition Hammer. 14 AMP motor for demanding jobs. Makita exclusive AVT counterbalance system reduces vibration. Variable speed control dial.', image: `${MCDN}/hm1/975f21eb-27a7-42ee-b648-1de2088de441_hm1214c_k_1500px.png` },
        ],
      },
      {
        name: "Equipos de Jardín (Makita)",
        products: [
          { name: "Makita XUX02SM1X1", price: "$299.95", sku: "MAK-XUX02SM1X1", description: 'LXT 18V Lithium-Ion Brushless Cordless Couple Shaft Power Head Kit w/13 in. String Trimmer Attachment (4.0Ah).', image: `${MCDN}/xux/309b5b6a-7289-4af9-a762-972b22ce036b_xux02sm1x1_k_1500px.png` },
          { name: "Makita XUX02SM1X3", price: "$349.95", sku: "MAK-XUX02SM1X3", description: 'LXT 18V Brushless Cordless Couple Shaft Power Head Kit with 13 in. String Trimmer and Leaf Blower Attachments, 4.0Ah.', image: `${MCDN}/xux/cea9295f-f8d9-426e-a3cd-7cd101ca96d8_xux02sm1x3_k_1500px.png` },
          { name: "Makita XUX02SM1X4", price: "$289.95", sku: "MAK-XUX02SM1X4", description: 'LXT 18V Lithium-Ion Brushless Cordless Couple Shaft Power Head Kit w/String Trimmer & 10 in. Pole Saw Attachments 4.0Ah.', image: `${MCDN}/xux/34860bcf-5bc4-46d4-aadd-e35aafac37fd_xux02sm1x4_k_1500px.png` },
          { name: "Makita XUX02SM1X5", price: "$499.95", sku: "MAK-XUX02SM1X5", description: '18V LXT Brushless Couple Shaft Power Head Kit w/String Trimmer, Pole Saw & Articulating Hedge Trimmer Attachments 4.0Ah.', image: `${MCDN}/xux/1a9bcd20-339f-45d3-972e-1f119582e25c_xux02sm1x5_k_1500px.png` },
          { name: "Makita XUX02SM1X6", price: "$599.95", sku: "MAK-XUX02SM1X6", description: '18V LXT Couple Shaft Power Head Kit w/String Trimmer, Pole Saw, Articulating Hedge Trimmer & Blower Attachments, 4.0Ah.', image: `${MCDN}/xux/44a04770-a9f9-41f7-90c6-e3dc982d0a17_xux02sm1x6_k_1500px.png` },
          { name: "Makita XBU03SM1", price: "$299.95", sku: "MAK-XBU03SM1", description: "116 MPH 459 CFM 18V LXT Lithium-Ion Brushless Cordless Leaf Blower Kit.", image: `${MCDN}/xbu/b81aab02-5c31-432a-ab23-208f293d7f32_xbu03sm1_k_1500px.png` },
          { name: "Makita XCU10SM1", price: "$319.95", sku: "MAK-XCU10SM1", description: 'LXT 10 in. 18V Lithium-Ion Brushless Battery Top Handle Chain Saw (Tool-Only).', image: `${MCDN}/xcu/a8d79846-8a6e-4d5a-966a-8b57d25533dc_xcu10sm1_k_1500px.png` },
          { name: "Makita XCU14SR1", price: "$319.95", sku: "MAK-XCU14SR1", description: '18V LXT Brushless Cordless 6" Pruning Saw Kit (2.0Ah). Compact design for one-hand use. Ideal for pruning, trimming and cutting small logs.', image: `${MCDN}/xcu/d621571a-f9b8-430d-89b2-31ee969ba09d_xcu14sr1_k_1500px.png` },
          { name: "Makita XCU04CM", price: "$439.95", sku: "MAK-XCU04CM", description: '36V (18V X2) LXT Brushless 16" Chain Saw Kit (4.0Ah). Powered by two 18V batteries for maximum power. Ideal for cutting firewood, limbing trees and light felling.', image: `${MCDN}/xcu/816bfdee-93f6-42ab-8017-ea3fc838caba_xcu04cm_k_1500px.png` },
        ],
      },
      {
        name: "Taladros y Atornilladores",
        products: [
          { name: "Makita XPH12Z", price: "$159.95", sku: "MAK-XPH12Z", description: '18V LXT Lithium-Ion 1/2 in. Brushless Cordless Hammer Driver-Drill (Tool Only).', image: `${MCDN}/xph/d95a3190-0b96-4e7b-85ef-9c139dbb28b5_xph12z_p_1500px.png` },
          { name: "Makita XDT14Z", price: "$169.95", sku: "MAK-XDT14Z", description: '18V LXT Lithium-Ion Brushless 1/4 in. Cordless Quick-Shift Mode 3-Speed Impact Driver (Tool Only).', image: `${MCDN}/xdt/7cb31bcc-d235-4ba7-9670-c42276973981_xdt14z_p_1500px.png` },
          { name: "Makita XFD10SY", price: "$179.95", sku: "MAK-XFD10SY", description: '1.5 Ah 18V LXT Lithium-Ion Compact Cordless 1/2 in. Variable Speed Driver Drill Kit with Tool Bag.', image: `${MCDN}/xfd/65439e2c-07a4-4112-a1b4-ed788831f336_xfd10sy_k_1500px.png` },
          { name: "Makita XDT11SY", price: "$179.95", sku: "MAK-XDT11SY", description: '1.5 Ah 18V LXT Lithium-Ion Compact Cordless 1/4 in. Variable Speed Impact Driver Kit.', image: `${MCDN}/xdt/a9bfb623-1228-4e13-9ea8-811b9e6e3fd3_xdt11sy_k_1500px.png` },
          { name: "Makita XT296SMR", price: "$289.95", sku: "MAK-XT296SMR", description: '18V LXT Lithium-Ion Brushless Cordless Hammer Drill and Impact Driver Combo Kit (2-Tool) w/ (2) 4Ah Batteries, Bag.', image: `${MCDN}/xt2/4b08398b-cce8-4be3-92b0-1c77bcdbc3d8_xt296smr_k_1500px.png` },
        ],
      },
      {
        name: "Llaves de Impacto",
        products: [
          { name: "Makita XWT08Z", price: "$339.95", sku: "MAK-XWT08Z", description: '18V LXT Lithium-Ion Brushless Cordless High Torque 1/2 in. 3-Speed Drive Impact Wrench (Tool-Only), delivers 740 ft.lbs. of Fastening Torque and 1,180 ft.lbs. of Nut-Busting Torque.', image: `${MCDN}/xwt/9b2a2d7f-cea4-4ac6-af2d-0d25742e8790_xwt08z_p_1500px.png` },
          { name: "Makita XWT08T", price: "$629.95", sku: "MAK-XWT08T", description: '18V LXT Lithium-Ion Brushless Cordless High Torque 1/2 in. Square Drive Impact Wrench w/ (2) Batteries 5.0Ah, Bag, delivers 740 ft.lbs. of Fastening Torque and 1,180 ft.lbs. of Nut-Busting Torque.', image: `${MCDN}/xwt/3183a24f-2f8f-4233-ac8f-dc53721f1932_xwt08t_k_1500px.png` },
          { name: "Makita XWT04S1", price: "$289.95", sku: "MAK-XWT04S1", description: '18V LXT Lithium-Ion Cordless 1/2 in. Sq. Drive Impact Wrench Kit (3.0Ah). Delivers 325 ft.lbs. of Fastening Torque, 2,200 IPM and 1,600 RPM. Weighs only 7.5 lbs. with battery.', image: `${MCDN}/xwt/28c8f88a-c0b7-4b61-839c-b2e669ab9694_xwt04s1_k_1500px.png` },
          { name: "Makita XRW01Z", price: "$199.95", sku: "MAK-XRW01Z", description: '3/8 in./1/4 in. 18V LXT Lithium-Ion Cordless Square Drive Ratchet (Tool-Only). Delivers 35 ft.lbs. of Max Torque, 0-800 RPM. Interchangeable 3/8" and 1/4" anvils. Low profile design for compact areas.', image: `${MCDN}/xrw/5351f1a0-223b-402f-94dc-de8ab898c901_xrw01z_p_1500px.png` },
        ],
      },
      {
        name: "Esmeriles y Amoladoras (Makita)",
        products: [
          { name: "Makita 9557PB", price: "$109.95", sku: "MAK-9557PB", description: '4-1/2" Paddle Switch Angle Grinder with AC/DC Switch. 7.5 AMP motor delivers 11,000 RPM. Large paddle switch for easy operation, weighs only 4.5 lbs.', image: `${MCDN}/955/95b8b5bb-f9cd-42a0-9331-eb3de17cf43e_9557pb_p_1500px.png` },
          { name: "Makita GA7021", price: "$229.95", sku: "MAK-GA7021", description: '7" Angle Grinder with AC/DC Switch. 15 AMP motor delivers 6,600 RPM. Rubberized soft grip handle, labyrinth construction with zig-zag varnish for longer tool life.', image: `${MCDN}/ga7/ef50e1f5-ee92-48ae-a32c-0d3175abf62f_ga7021_p_1500px.png` },
          { name: "Makita XAG26Z", price: "$209.95", sku: "MAK-XAG26Z", description: '18V LXT Brushless Cordless 4-1/2" / 5" Paddle Switch X-LOCK Angle Grinder with AFT (Active Feedback-sensing Technology). Tool Only. One-touch X-LOCK accessory changes.', image: `${MCDN}/xag/bd2a2a59-1098-4bc7-b31e-8954e8e96bb2_xag26z_p_1500px.png` },
        ],
      },
      {
        name: "Sierras y Cortadoras",
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
      {
        name: "Combos y Ofertas (Makita)",
        products: [
          { name: "Makita XT505", price: "$799.95", sku: "MAK-XT505", description: '18V LXT Lithium-Ion Cordless 5-Pc. Combo Kit (3.0Ah). Includes Hammer Drill, Impact Driver, Circular Saw, Recipro Saw, Flashlight, (2) 3.0Ah Batteries, Charger, and Tool Bag.', image: `${MCDN}/xt5/af5455a5-8234-4456-a563-962d7c2e3bab_xt505_k_1500px.png` },
          { name: "Makita GT400M1D1", price: "$999.95", sku: "MAK-GT400M1D1", description: '40V max XGT Brushless Cordless 4-Pc. Combo Kit (2.5Ah). Includes Hammer Drill, Impact Driver, Circular Saw, Recipro Saw, (2) 2.5Ah Batteries, Charger, and Bag.', image: `${MCDN}/gt4/6a06a91e-6581-4fc6-8da0-77efa87e790f_gt400m1d1_k_1500px.png` },
          { name: "Makita GT401M1D1", price: "$999.95", sku: "MAK-GT401M1D1", description: '40V max XGT Brushless Cordless 4-Pc. Combo Kit (4.0Ah). Includes Hammer Drill, Impact Driver, Circular Saw, Recipro Saw, (2) 4.0Ah Batteries, Charger, and Bag.', image: `${MCDN}/gt4/eeef9b95-816b-42ae-a274-a87d9985a328_gt401m1d1_k_1500px.png` },
          { name: "Makita GT500M", price: "$1,149.95", sku: "MAK-GT500M", description: '40V max XGT Brushless Cordless 5-Pc. Combo Kit (4.0Ah). Includes Hammer Drill, Impact Driver, Circular Saw, Recipro Saw, Flashlight, (2) 4.0Ah Batteries, Charger, and Bag.', image: `${MCDN}/gt5/7af0ddbb-e631-4cc3-9150-c95d7e801913_gt500m_k_1500px.png` },
        ],
      },
    ],
  },
  {
    id: "milwaukee",
    name: "Milwaukee",
    accent: "border-red-600",
    badge: "bg-red-600/10 text-red-600",
    categories: [
      // ── 1. Rotary Hammers ──
      {
        name: "Martillos Rotatorios (Milwaukee)",
        products: [
          { name: 'Milwaukee 5262-21', price: "$214.62", sku: "MIL-5262-21", description: '8 Amp Corded 1" SDS D-Handle Rotary Hammer. 5,625 RPM and 0-4,000 BPM. Compact, lightweight design for overhead and tight space applications.', image: `${HCDN}/394f7138-759d-457b-af2c-6347e128b702/svn/milwaukee-rotary-hammers-5262-21-64_600.jpg` },
          { name: 'Milwaukee 5268-21', price: "$404.62", sku: "MIL-5268-21", description: '1-1/8" Corded SDS-Plus Rotary Hammer. 8 Amp motor delivers 5,500 RPM and 0-5,500 BPM. Anti-vibration system for reduced user fatigue.', image: `${TCDN}/milwaukee-5268-21_01_d69e918f-979e-43ee-acf1-1429af948cc0.jpg?v=1769855034&width=800` },
          { name: 'Milwaukee 2613-20', price: "$199.00", sku: "MIL-2613-20", description: 'M18 18V Lithium-Ion Brushless Cordless 1" SDS-Plus D-Handle Rotary Hammer (Tool-Only). 2.1 ft-lbs of impact energy, 0-1,400 RPM.', image: `${HCDN}/a50f9b21-16d8-44fc-ac5c-4dd51366e57e/svn/milwaukee-rotary-hammers-2613-20-64_600.jpg` },
          { name: 'Milwaukee 2912-20', price: "$249.00", sku: "MIL-2912-20", description: 'M18 FUEL 18V Lithium-Ion Brushless Cordless 1" SDS-Plus Rotary Hammer (Tool-Only). 2.1 ft-lbs of impact energy, AUTOSTOP Control.', image: `${HCDN}/20e2c982-587f-4382-8192-fccb3892ef45/svn/milwaukee-rotary-hammers-2912-20-64_600.jpg` },
          { name: 'Milwaukee 5517-21', price: "$519.95", sku: "MIL-5517-21", description: '1-9/16" SDS-Max Rotary Hammer. 10.5 Amp motor delivers 3,300 BPM. Anti-Vibration System (AVS). Constant speed electronics under load.', image: `${HCDN}/c010c3fb-a54e-46c7-b64c-16a4eb0a64b8/svn/milwaukee-rotary-hammers-5517-21-64_600.jpg` },
          { name: 'Milwaukee 5518-21', price: "$769.95", sku: "MIL-5518-21", description: '1-3/4" SDS-MAX Rotary Hammer. 15 Amp motor delivers 2,840 BPM with 8.2 ft-lbs of impact energy. AVS and Constant Speed Control.', image: `${HCDN}/a9ff9c48-a178-42a3-a855-f6f10a894e97/svn/milwaukee-rotary-hammers-5518-21-64_600.jpg` },
          { name: 'Milwaukee 2912-22', price: "$449.00", sku: "MIL-2912-22", description: 'M18 FUEL 1" SDS-Plus Rotary Hammer Kit with Two 6.0Ah Batteries, Charger and Hard Case. AUTOSTOP Control, 2.1 ft-lbs impact energy.', image: `${HCDN}/0da11d05-abce-4669-9359-34450b15acc5/svn/milwaukee-rotary-hammers-2912-22-64_600.jpg` },
          { name: 'Milwaukee 2717-22HD', price: "$799.00", sku: "MIL-2717-22HD", description: 'M18 FUEL 1-9/16" SDS-Max Rotary Hammer Kit w/ Two 8.0Ah Batteries, Charger and Hard Case. Cordless power equivalent to corded. AUTOSTOP.', image: `${HCDN}/5d475635-d440-4aab-8519-4f71a19f14ba/svn/milwaukee-rotary-hammers-2717-22hd-64_600.jpg` },
        ],
      },
      // ── 2. Demolition Hammers ──
      {
        name: "Martillos Demoledores (Milwaukee)",
        products: [
          { name: 'Milwaukee 5446-21', price: "$749.00", sku: "MIL-5446-21", description: 'SDS-MAX Demolition Hammer. 14 Amp motor delivers 2,840 BPM. Soft-start and dial speed for controlled starts. AVS and 15.2 ft-lbs impact energy.', image: `${HCDN}/a53bf528-484f-4487-854e-7e0f17793b10/svn/milwaukee-rotary-hammers-5446-21-64_600.jpg` },
          { name: 'Milwaukee MXF368-1XC', price: "$3,499.00", sku: "MIL-MXF368-1XC", description: 'MX FUEL Lithium-Ion Cordless 1-1/8" Breaker with Battery and Charger. Delivers up to 35 ft-lbs of impact energy. Eliminates cords and gas.', image: `${ACDN}/dw9145f3ba/images/images/catalog/product/045242537402/milwaukee-mx-fuel-breaker-mxf368-1xc.jpg?sw=720` },
        ],
      },
      // ── 3. Grinders ──
      {
        name: "Esmeriles y Amoladoras (Milwaukee)",
        products: [
          { name: 'Milwaukee 6130-33', price: "$79.00", sku: "MIL-6130-33", description: '7 Amp Corded 4-1/2" Small Angle Grinder with Sliding Lock-On Switch. 11,000 RPM. Compact body and ergonomic barrel grip.', image: `${ACDN}/dw86335078/images/images/catalog/product/045242195732/milwaukee-70-amp-4-12-in-small-angle-grinder-6130-33.jpg?sw=720` },
          { name: 'Milwaukee 6142-30', price: "$139.00", sku: "MIL-6142-30", description: '11 Amp Corded 4-1/2" Small Angle Grinder with Lock-On Paddle Switch. 11,000 RPM. Overload protection for long motor life.', image: `${HCDN}/c1188195-fbbb-4b12-926f-8aaa98c40928/svn/milwaukee-angle-grinders-6142-30-64_600.jpg` },
          { name: 'Milwaukee 6088-30', price: "$329.00", sku: "MIL-6088-30", description: '15 Amp 7"/9" Large Angle Grinder with Trigger Lock-On Switch. 6,000 RPM. Slow start reduces startup torque. Robust construction.', image: `${HCDN}/f7f59f2d-b65c-47b8-a92e-92496db236cb/svn/milwaukee-angle-grinders-6088-30-64_600.jpg` },
          { name: 'Milwaukee 2522-20', price: "$129.00", sku: "MIL-2522-20", description: 'M12 FUEL 12V Lithium-Ion Brushless Cordless 3" Cut Off Saw (Tool-Only). 20,000 RPM. Compact design for one-handed use.', image: `${HCDN}/21843dc9-e0fd-417f-a84b-7249e88a2f7d/svn/milwaukee-power-cutting-tools-2522-20-64_600.jpg` },
          { name: 'Milwaukee 2686-20', price: "$149.00", sku: "MIL-2686-20", description: 'M18 18V Lithium-Ion Brushless Cordless 4-1/2"/5" Grinder w/ Paddle Switch (Tool-Only). 8,500 RPM. RAPIDSTOP brake.', image: `${HCDN}/5e3bdfbb-1f1b-408e-a365-e0957243d24e/svn/milwaukee-angle-grinders-2686-20-64_600.jpg` },
          { name: 'Milwaukee 2785-20', price: "$279.00", sku: "MIL-2785-20", description: 'M18 FUEL 18V Lithium-Ion Brushless Cordless 7"/9" Angle Grinder (Tool-Only). 6,000 RPM. RAPIDSTOP brake and anti-kickback.', image: `${HCDN}/dd34e534-325d-4770-977e-a287b2d890f2/svn/milwaukee-angle-grinders-2785-20-64_600.jpg` },
          { name: 'Milwaukee 2522-21XC', price: "$199.00", sku: "MIL-2522-21XC", description: 'M12 FUEL 3" Cut-Off Saw Kit with One 4.0Ah Battery, Charger and Bag. 20,000 RPM. Compact one-handed design.', image: `${HCDN}/ecc353e1-2742-4808-99ad-c69b36da004d/svn/milwaukee-power-cutting-tools-2522-21xc-64_600.jpg` },
          { name: 'Milwaukee 2686-20 + Starter Kit', price: "$249.00", sku: "MIL-2686-20-KIT", description: 'M18 Brushless 4-1/2"/5" Grinder Paddle Switch with 5.0Ah Starter Kit. RAPIDSTOP brake. 8,500 RPM.', image: `${HCDN}/9f26038e-edd8-4596-8ca0-6170e384b650/svn/milwaukee-angle-grinders-2686-20-48-59-1850-64_600.jpg` },
          { name: 'Milwaukee 2880-22', price: "$399.00", sku: "MIL-2880-22", description: 'M18 FUEL 4-1/2"/5" Grinder Paddle Switch Kit with Two 6.0Ah Batteries. RAPIDSTOP brake, anti-kickback, and drop shut-off.', image: `${ACDN}/dw08a7b598/images/images/catalog/product/045242566402/milwaukee-m18-fuel-4-12inch--5inch-grinder-paddle-switch-no-lock-kit-2880-22.jpg?sw=720` },
        ],
      },
      // ── 4. Drills & Impact Drivers ──
      {
        name: "Taladros e Impactos",
        products: [
          { name: 'Milwaukee 3453-20', price: "$99.00", sku: "MIL-3453-20", description: 'M12 FUEL 12V Lithium-Ion Brushless Cordless 1/4" Hex Impact Driver (Tool-Only). 1,700 in-lbs torque, 3,300 RPM.', image: `${TCDN}/Milwaukee-3453-20_01.jpg?v=1771600647&width=800` },
          { name: 'Milwaukee 2760-20', price: "$149.00", sku: "MIL-2760-20", description: 'M18 FUEL SURGE 1/4" Hex Hydraulic Impact Driver (Tool-Only). Up to 50% quieter. 450 ft-lbs torque, 0-3,000 RPM.', image: `${HCDN}/9c416e16-396a-4b33-bc4b-0c51dcfb1e06/svn/milwaukee-impact-drivers-2760-20-64_600.jpg` },
          { name: 'Milwaukee 2761-20', price: "$179.00", sku: "MIL-2761-20", description: 'M18 FUEL SURGE 1/4" Hex Hydraulic Impact Driver (Tool-Only). Next-gen SURGE hydraulic technology. Quieter and less vibration.', image: `${TCDN}/Milwaukee-2761-20_01_05c08f1d-4db8-4a49-82f9-40ab4e603341.jpg?v=1760030897&width=800` },
          { name: 'Milwaukee 2415-20', price: "$99.00", sku: "MIL-2415-20", description: 'M12 12V Lithium-Ion Cordless 3/8" Right Angle Drill (Tool-Only). Compact head for tight spaces. 100 in-lbs torque, 0-800 RPM.', image: `${ACDN}/dwd5833229/images/images/catalog/product/045242197163/milwaukee-12v-lithium-ion-38-m12-right-angle-drilldriver-bare-tool-2415-20.jpg?sw=720` },
          { name: 'Milwaukee 2904-20', price: "$169.00", sku: "MIL-2904-20", description: 'M18 FUEL 18V Lithium-Ion Brushless Cordless 1/2" Hammer Drill/Driver (Tool-Only). 1,400 in-lbs torque, 2,000 RPM. ALL-METAL Ratcheting Chuck.', image: `${HCDN}/46d7ead7-83aa-4cfe-8dcc-65b27371f400/svn/milwaukee-hammer-drills-2904-20-64_600.jpg` },
          { name: 'Milwaukee 2551-22', price: "$199.00", sku: "MIL-2551-22", description: 'M12 FUEL SURGE 1/4" Hex Hydraulic Driver Kit w/ Two 2.0Ah Batteries, Charger, Bag. Quieter fastening with hydraulic technology.', image: `${HCDN}/42823bc3-e212-47d4-94cf-424eaa1a0c79/svn/milwaukee-impact-drivers-2551-22-2951-20-48-11-2420x2-64_600.jpg` },
          { name: 'Milwaukee 3650-22CT', price: "$179.00", sku: "MIL-3650-22CT", description: 'M18 Brushless 1/4" Impact Driver Kit with Two 2.0Ah Batteries, Charger. 1,800 in-lbs torque, 3,600 RPM. Compact design.', image: `${HCDN}/c14a7e4d-91e3-4e50-8fea-b1e4fdfefad7/svn/milwaukee-impact-drivers-3650-22ct-64_600.jpg` },
          { name: 'Milwaukee 2904-22', price: "$349.00", sku: "MIL-2904-22", description: 'M18 FUEL 1/2" Hammer Drill/Driver Kit with Two 5.0Ah Batteries, Hard Case. 1,400 in-lbs torque. POWERSTATE Brushless Motor.', image: `${HCDN}/5c8cabc6-d57d-48e1-89ae-c99224e183aa/svn/milwaukee-hammer-drills-2904-22-64_600.jpg` },
          { name: 'Milwaukee 3497-22', price: "$249.00", sku: "MIL-3497-22", description: 'M12 FUEL Hammer Drill and Impact Driver Combo Kit (2-Tool) w/ 2 Batteries and Bag. Sub-compact powerhouse for everyday tasks.', image: `${ACDN}/dw04ec8727/images/images/catalog/product/045242637331/milwaukee-m12-fuel-2-tool-combo-kit-3497-22.jpg?sw=720` },
          { name: 'Milwaukee 3697-22', price: "$399.00", sku: "MIL-3697-22", description: 'M18 FUEL Hammer Drill and Impact Driver Combo Kit (2-Tool) w/ 2 Batteries. Industry-leading performance in drilling and driving.', image: `${HCDN}/dcf46a21-148b-46d0-ba4f-1cd7f10f3021/svn/milwaukee-power-tool-combo-kits-3697-22-64_600.jpg` },
          { name: 'Milwaukee 2807-20', price: "$279.00", sku: "MIL-2807-20", description: 'M18 FUEL GEN II 1/2" Hole Hawg Right Angle Drill (Tool-Only). 1,500 RPM with over 200 4-3/8" holes per charge. QUIK-LOK.', image: `${ACDN}/dwdd5da08e/images/images/catalog/product/045242560370/milwaukee-m18-fuel-hole-hawg-12-in-right-angle-drill-bare-tool-2807-20.jpg?sw=720` },
        ],
      },
      // ── 5. Saws & Power Cutters ──
      {
        name: "Sierras y Cortadoras (Milwaukee)",
        products: [
          { name: 'Milwaukee 6519-31', price: "$149.00", sku: "MIL-6519-31", description: '12 Amp SAWZALL Reciprocating Saw with Case. 0-3,000 SPM with 3/4" stroke length. Counter-balance mechanism for less vibration.', image: `${HCDN}/ee680fdc-1ad4-4b05-8187-3de7affd4ce4/svn/milwaukee-reciprocating-saws-6519-31-64_600.jpg` },
          { name: 'Milwaukee 2621-20', price: "$129.00", sku: "MIL-2621-20", description: 'M18 Cordless SAWZALL Reciprocating Saw (Tool-Only). 0-3,000 SPM with 3/4" stroke. QUIK-LOK blade clamp for fast changes.', image: `${HCDN}/e3922c83-cf48-4066-9cda-9dd3cdf990bb/svn/milwaukee-reciprocating-saws-2621-20-64_600.jpg` },
          { name: 'Milwaukee 2821-20', price: "$199.00", sku: "MIL-2821-20", description: 'M18 FUEL GEN 2 SAWZALL Reciprocating Saw (Tool-Only). 0-3,000 SPM, 1-1/4" stroke. 50% faster cuts. FIXTEC clamp.', image: `${HCDN}/e8f5bd00-407d-4e60-8fce-f1bade27ab6b/svn/milwaukee-reciprocating-saws-2821-20-64_600.jpg` },
          { name: 'Milwaukee 2722-20', price: "$249.00", sku: "MIL-2722-20", description: 'M18 FUEL Super SAWZALL Orbital Reciprocating Saw (Tool-Only). 0-3,000 SPM, 1-1/4" stroke. Orbital action for aggressive cuts.', image: `${HCDN}/37a64942-1026-469e-bef8-9d419cd4f2d0/svn/milwaukee-reciprocating-saws-2722-20-64_600.jpg` },
          { name: 'Milwaukee 2625-20', price: "$99.00", sku: "MIL-2625-20", description: 'M18 Cordless HACKZALL Reciprocating Saw (Tool-Only). One-handed compact design. 0-3,000 SPM, 1/2" stroke.', image: `${ACDN}/dw110e51a6/images/images/catalog/product/045242200436/milwaukee-m18-hackzall-reciprocating-saw-bare-tool-2625-20.jpg?sw=720` },
          { name: 'Milwaukee 2719-20', price: "$149.00", sku: "MIL-2719-20", description: 'M18 FUEL HACKZALL Reciprocating Saw (Tool-Only). Brushless motor for 2X longer life. One-hand design, LED light.', image: `${HCDN}/a3e84f60-44f0-419f-b1ba-e015e46b09e9/svn/milwaukee-reciprocating-saws-2719-20-64_600.jpg` },
          { name: 'Milwaukee 2420-21', price: "$149.00", sku: "MIL-2420-21", description: 'M12 HACKZALL Reciprocating Saw Kit with 1.5Ah Battery, Charger and Tool Bag. Compact, 0-3,000 SPM. Cuts PVC, wood, metal.', image: `${HCDN}/d84c207d-c4e1-4430-8d15-f76a7df8b971/svn/milwaukee-reciprocating-saws-2420-21-64_600.jpg` },
          { name: 'Milwaukee 2520-21XC', price: "$219.00", sku: "MIL-2520-21XC", description: 'M12 FUEL HACKZALL Kit w/ 4.0Ah Battery, Charger, Tool Bag. Brushless motor, 0-3,000 SPM. 2X faster cuts than M12.', image: `${HCDN}/7a03ff00-e793-4a1a-9875-f0a264fcbbba/svn/milwaukee-reciprocating-saws-2520-21xc-64_600.jpg` },
          { name: 'Milwaukee 2821-20 + FORGE Kit', price: "$399.00", sku: "MIL-2821-20-FK", description: 'M18 FUEL GEN 2 SAWZALL + FORGE 8.0Ah Battery + Charger. Ultimate cordless reciprocating saw setup. 50% faster cuts.', image: "https://www.toolnut.com/cdn/shop/files/2821-21f_101.jpg?v=1740524125" },
          { name: 'Milwaukee 2722-20 + FORGE Kit', price: "$449.00", sku: "MIL-2722-20-FK", description: 'M18 FUEL Super SAWZALL + FORGE 8.0Ah Battery + Charger. Orbital action for the most aggressive cutting applications.', image: "https://artstoolsales.com/cdn/shop/files/2722-21HD_Kit.jpg?v=1756825888" },
          { name: 'Milwaukee 2630-20', price: "$129.00", sku: "MIL-2630-20", description: 'M18 18V Cordless 6-1/2" Circular Saw (Tool-Only). 3,500 RPM. Magnesium upper/lower guards. Cuts 2X material at 45°.', image: `${HCDN}/8b9b7559-0c47-478e-bf72-420d60371b68/svn/milwaukee-circular-saws-2630-20-64_600.jpg` },
          { name: 'Milwaukee 2631-20', price: "$189.00", sku: "MIL-2631-20", description: 'M18 Brushless 7-1/4" Circular Saw (Tool-Only). 5,000 RPM. Magnesium shoe for durability. LED light and rafter hook.', image: `${TCDN}/Milwaukee-2631-20_01.jpg?v=1769855034&width=800` },
          { name: 'Milwaukee 2834-20', price: "$249.00", sku: "MIL-2834-20", description: 'M18 FUEL 7-1/4" Circular Saw (Tool-Only). 5,800 RPM. Fastest blade speed in class. REDLITHIUM battery intelligence.', image: `${HCDN}/9b6ee406-8591-40d8-aede-31837dcccd6a/svn/milwaukee-circular-saws-2834-20-64_600.jpg` },
          { name: 'Milwaukee 2930-20', price: "$279.00", sku: "MIL-2930-20", description: 'M18 FUEL 7-1/4" Rear Handle Circular Saw (Tool-Only). 5,800 RPM. Traditional worm-drive feel with cordless freedom.', image: `${HCDN}/0485cf21-1ff5-472d-8381-78344620a52d/svn/milwaukee-circular-saws-2930-20-64_600.jpg` },
          { name: 'Milwaukee 2829-20', price: "$249.00", sku: "MIL-2829-20", description: 'M18 FUEL Compact Bandsaw (Tool-Only). Cuts 2-1/2" round or 2-1/2" x 2-1/2" square stock. One-handed portable cutting.', image: `${HCDN}/528cdfff-59b5-4f41-8c7d-e3beaae9a42c/svn/milwaukee-portable-band-saws-2829-20-64_600.jpg` },
          { name: 'Milwaukee 2929-20', price: "$379.00", sku: "MIL-2929-20", description: 'M18 FUEL Deep Cut Band Saw (Tool-Only). Cuts up to 5" x 5" material. Balanced design for overhead and bench cutting.', image: `${HCDN}/c1f5b78e-9cba-4196-9b36-cba93d087c5e/svn/milwaukee-portable-band-saws-2929-20-64_600.jpg` },
          { name: 'Milwaukee 2786-20', price: "$449.00", sku: "MIL-2786-20", description: 'M18 FUEL ONE-KEY 9" Cut-Off Saw (Tool-Only). Cuts up to 3-1/2" deep. AUTOSTOP kickback control. ONE-KEY connectivity.', image: `${HCDN}/26698181-9d8b-472b-a36c-db5a88b8d076/svn/milwaukee-circular-saws-2786-20-64_600.jpg` },
          { name: 'Milwaukee 2736-21HD', price: "$799.00", sku: "MIL-2736-21HD", description: 'M18 FUEL ONE-KEY 8-1/4" Table Saw Kit with 12.0Ah Battery, Rapid Charger. 24-1/2" rip capacity. One-Key for guard tracking.', image: `${HCDN}/c987f098-276e-4d2e-8d8f-fcd93fbe524c/svn/milwaukee-portable-table-saws-2736-21hd-64_600.jpg` },
        ],
      },
      // ── 6. Garden Equipment ──
      {
        name: "Equipos de Jardín (Milwaukee)",
        products: [
          { name: 'Milwaukee 2527-20', price: "$149.00", sku: "MIL-2527-20", description: 'M12 FUEL 6" HATCHET Pruning Saw (Tool-Only). 7,150 SPM. Compact and lightweight for one-handed pruning. REDLINK overload protection.', image: `${HCDN}/933a4e80-cd00-47f1-bd08-396c93f5c651/svn/milwaukee-cordless-chainsaws-2527-20-64_600.jpg` },
          { name: 'Milwaukee 3004-20', price: "$199.00", sku: "MIL-3004-20", description: 'M18 FUEL 8" HATCHET Pruning Saw (Tool-Only). 6,600 SPM. Full-complement cutter bar for reduced kickback. Ideal for tree care pros.', image: `${ACDN}/dw6bd1e26e/images/images/catalog/product/045242646173/milwaukee-m18-fuel-hatchet-8-inch-pruning-saw-bare-tool-3004-20.jpg?sw=720` },
          { name: 'Milwaukee 2727-20', price: "$279.00", sku: "MIL-2727-20", description: 'M18 FUEL 16" Chainsaw (Tool-Only). Variable speed trigger and bucking spikes. Automatic chain oiler. Equivalent to 40cc gas.', image: `${HCDN}/4e6ae5d2-bde8-4de5-bc50-959341e90ba8/svn/milwaukee-cordless-chainsaws-2727-20-64_600.jpg` },
          { name: 'Milwaukee 2826-20T', price: "$349.00", sku: "MIL-2826-20T", description: 'M18 FUEL 14" Top Handle Chainsaw (Tool-Only). Designed for arborists. Low kickback bar. Tool-free chain tensioning.', image: `${TCDN}/Milwaukee-2826-20T_01_b318ae8a-6c1b-4c66-b3dc-11cd76c54d7b.jpg?v=1758201574&width=800` },
          { name: 'Milwaukee 2527-21', price: "$249.00", sku: "MIL-2527-21", description: 'M12 FUEL 6" HATCHET Pruning Saw Kit with 4.0Ah Battery and Charger. Compact, lightweight, and ready for heavy pruning.', image: `${HCDN}/ff529f54-03dd-4c7e-b0ad-0083e9dab7c6/svn/milwaukee-cordless-chainsaws-2527-21-64_600.jpg` },
          { name: 'Milwaukee 2727-21HD', price: "$479.00", sku: "MIL-2727-21HD", description: 'M18 FUEL 16" Chainsaw Kit with 12.0Ah Battery and M18 Rapid Charger. Full system for serious cutting. Replaces 40cc gas saws.', image: `${HCDN}/094845c2-9cf3-44b1-9a42-8da7049268ed/svn/milwaukee-cordless-chainsaws-2727-21hd-64_600.jpg` },
          { name: 'Milwaukee 2533-20', price: "$139.00", sku: "MIL-2533-20", description: 'M12 FUEL 8" Hedge Trimmer (Tool-Only). 3,000 SPM. Compact design for precision trimming and shaping.', image: `${ACDN}/dwe75720c1/images/images/catalog/product/045242646418/milwaukee-m12-fuel-8-in-hedge-trimmer-bare-tool-2533-20.jpg?sw=720` },
          { name: 'Milwaukee 3033-20', price: "$219.00", sku: "MIL-3033-20", description: 'M18 FUEL 24" Brushless Hedge Trimmer (Tool-Only). 3,400 SPM. Hardened steel blades for clean cuts on branches up to 1".', image: `${HCDN}/7eee67f5-cc4f-4558-8b75-da1508f57a96/svn/milwaukee-cordless-hedge-trimmers-3033-20-64_600.jpg` },
          { name: 'Milwaukee 3016-20ST', price: "$249.00", sku: "MIL-3016-20ST", description: 'M18 FUEL 16" String Trimmer with QUIK-LOK Attachment Capability (Tool-Only). Variable speed trigger. Carbon fiber shaft.', image: `${TCDN}/Milwaukee-3016-20ST_01_53635a85-81b2-42a5-aa51-15e0b89c68e6.jpg?v=1767859881&width=800` },
          { name: 'Milwaukee 3016-20PS', price: "$249.00", sku: "MIL-3016-20PS", description: 'M18 FUEL 10" Pole Saw with QUIK-LOK Attachment Capability (Tool-Only). Reaches up to 13 ft. Automatic oiler system.', image: `${TCDN}/Milwaukee-3016-20PS_01_60cc9243-a18a-4b23-8f5d-4c161ddf3513.jpg?v=1770321468&width=800` },
          { name: 'Milwaukee 3016-21ST', price: "$379.00", sku: "MIL-3016-21ST", description: 'M18 FUEL 16" String Trimmer Kit with QUIK-LOK, 8.0Ah Battery. Carbon fiber shaft with variable speed for ultimate control.', image: `${TCDN}/Milwaukee-3016-21ST_01_158133e2-e46e-40a3-8225-6eee01ab51f2.jpg?v=1769643271&width=800` },
          { name: 'Milwaukee 3031-21', price: "$449.00", sku: "MIL-3031-21", description: 'M18 FUEL QUIK-LOK String Trimmer + Blower Combo Kit (2-Tool) w/ 8.0Ah Battery. Complete cordless outdoor system.', image: `${ACDN}/dw4e2a7f9c/images/images/catalog/product/045242606917/milwaukee-m18-fuel-2-tool-combo-kit-3000-21.jpg?sw=720` },
        ],
      },
      // ── 7. Bundle Special Deals ──
      {
        name: "Combos y Ofertas (Milwaukee)",
        products: [
          
          { name: 'Milwaukee 3697-25', price: "$899.95", sku: "MIL-3697-25", description: 'M18 FUEL 5-Tool Combo Kit w/ Two 5.0Ah Batteries, Charger, Tool Bag. Includes Hammer Drill, Impact Driver, Circular Saw, SAWZALL, and LED Light.', image: `${HCDN}/cd3d1f2e-fed2-4f2f-9682-aa63d6bf48c8/svn/milwaukee-power-tool-combo-kits-3697-25-64_600.jpg` },
          { name: 'Milwaukee 3693-24CX', price: "$549.95", sku: "MIL-3693-24CX", description: 'M18 Brushless 4-Tool Combo Kit w/ 2 Batteries, Charger, Tool Bag. Hammer Drill, Impact Driver, SAWZALL, Work Light. Compact and efficient.', image: `${ACDN}/dw019d0c8f/images/images/catalog/product/S0000000005444/milwaukee-m18-4-tool-combo-kit-3693-24cx.jpg?sw=720` },
          { name: 'Milwaukee 3697-27 + 2967-20', price: "$1,399.95", sku: "MIL-3697-27-BD", description: 'M18 FUEL 7-Tool Combo Kit + 1/2" High Torque Impact Wrench w/ Friction Ring. The ultimate professional tool set for jobsite productivity.', image: "/images/milwaukee-3697-27-bundle.png" },
        ],
      },
    ],
  },
];
