export const productCategories = [
	{
		id: 1,
		title: "Cervical / Thoracic",
		products: [
			{
				id: "Neon3™",
				title: "Neon3™",
				subTitle: "universal OCT spinal stabilization",
				image: "/images/products/1.png",
				images: ["/images/product/1.png", "/images/product/2.png", "/images/product/3.png"],
				system: [
					"Universal system for dorsal stabilization",
					"From the occiput to the upper thoracic spine",
					"Polyaxial and cannulated screws",
					"Prepared for navigation",
				],
				advantages: [
					"Cervical system for all common placement techniques",
					"Safety for user and patient by cannulated screws and a navigation option",
					"Patient-protective, given the minimally invasive access technique",
				],
				instrumentation: [
					"OC stabilization",
					"Different variants of lateral mass screws",
					"Transpedicular instrumentation",
					"Wright trans-laminar instrumentation",
				],
				combination: ["Hybrid rod Ø 4,0 mm/6,0 mm", "Rod-rod-connector, parallel and axial"],
			},
		],
	},
	{
		id: 2,
		title: "Thoracic/Lumbar/Sacral",
		products: [
			{
				id: "cosmicMIA™",
				title: "cosmicMIA™",
				subTitle: "dynamic minimally invasive system",
				image: "/images/products/2.png",
			},
			{
				id: "uCentum™",
				title: "uCentum™",
				subTitle: "comprehensive posterior system",
				image: "/images/products/3.png",
			},
		],
	},
	{
		id: 3,
		title: "Sacral/Iliac",
		products: [
			{
				id: "uBase™",
				title: "uBase™",
				subTitle: "iliosacral fixation system",
				image: "/images/products/4.png",
			},
		],
	},
];

export const variantsOptions = {
	spine: [
		{ label: "bone-substitude-and-bone-cement", value: "bone-substitude-and-bone-cement" },
		{ value: "cage-system", label: "cage-system" },
		{ value: "rod-screw-system", label: "rod-screw-system" },
	],
	caranio: [{ value: "caranio-maxillio-facial", label: "caranio-maxillio-facial" }],
};
export const normalizeKey = key => key?.split("-").join("_");
