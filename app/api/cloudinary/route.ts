import { NextResponse } from "next/server";

export async function GET() {
  const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
  const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/image/upload?max_results=417`;

  const auth = Buffer.from(`${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`).toString("base64");

  try {
    const response = await fetch(url, {
      headers: { Authorization: `Basic ${auth}` },
    });

    let data = await response.json();

    // Debugging: Log Cloudinary response in the Next.js terminal
    console.log("Cloudinary API Response:", data);

    // **Filter out unwanted images**
    const excludedImages = [
      "1958_71_au0i3z",
      "MENU2_egdipl",
      "MENU1_utzt7t",
      "letterhead3_wgshq3",
      "letterhead2_bjgya8",
      "envelope5_kzqk5p",
      "envelope4_dhgec4",
      "envelope3_z3th3k",
      "envelope2_wfut70",
      "envelope1_evao1g",
      "bc8_zcfuop",
      "bc7_kvaio1",
      "bc6_jbbyue",
      "bc5_zeabs6",
      "bc4_af83hp",
      "bc3_dmuk6t",
      "bc2_jrsmf9",
      "bc1_wthta3",
      "brochure2_jpbq57",
      "brochure1_ldonsh",
      "album3_qmaemw",
      "album2_khqafv",
      "album1_vjcg0i",
      "Syncra2_dcira8",
      "Syncra_rcqh9l",
      "Pixl_obeirb",
      "Orion_nhytlx",
      "Nexel_oojnd2",
      "logo7_dqzcmy",
      "logo6_feauck",
      "JDIDWi_zrncu0",
      "JAKOBD_W_mlibeo",
      "Flareon_jjzfo7",
      "Codera_x62wps",
      "CodeProbe_spzysc",
      "Arqitect_s9rwpd",
      "lights_vlpply",
      "6_y5qnus",
      "5_rixswf",
      "4_mdy7ed",
      "3_gsj9le",
      "2_zfmhqq",
      "1_xdu8uc",
      "jdgrid_ktckws",
      "portrait_nbyrck",
    ];

    data.resources = data.resources.filter(
      (img: any) => !excludedImages.includes(img.public_id)
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error("Cloudinary API Fetch Error:", error);
    return NextResponse.json({ error: "Failed to fetch Cloudinary images" }, { status: 500 });
  }
}
