import { Image, Text, Box } from "@chakra-ui/react";

export const about = [
  {
    title: (
      <Text>
        Grafik dizayn sohasida 120 dan oshiq{" "}
        <Box fontWeight={"700"} as={"span"}>
          muvaffaqiyatli
        </Box>{" "}
        loyihalar.
      </Text>
    ),
    icon: <Image src="../../images/u_comment-heart.png" />,
  },
  {
    title: (
      <Text>
        Grafik dizayn sohasida <br />
        <Box fontWeight={"700"} as={"span"}>
          4 yillik
        </Box>{" "}
        tajriba
      </Text>
    ),
    icon: <Image src="../../images/u_comparison.png" />,
  },
  {
    title: (
      <Text>
        10 dan ortiq{" "}
        <Box fontWeight={"700"} as={"span"}>
          Logo
        </Box>
        lar muallifi
      </Text>
    ),
    icon: <Image src="../../images/fi_edit-3.png" />,
  },
];

export const lesson = [
  {
    title: "Grafik dizayner bo’lish uchun nimalarni bilish kerak",
  },
  {
    title: "Fotoshopdagi boshlang’ich barcha elementlarni qo’llash",
  },
  {
    title: "Rasmlarni PNG holatga o’tkazish (Orqa fonni kesish)",
  },
  {
    title: "Bonus",
  },
  {
    title: "O’zingizni go’yoki Dubayda turgandek qilib dizayn qilish",
  },
];

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

export const portfolioFirst = [
  { image: <Image src="../../images/1.jpg" /> },
  { image: <Image src="../../images/2.jpg" /> },
  { image: <Image src="../../images/3.jpg" /> },
  { image: <Image src="../../images/4.jpg" /> },
  { image: <Image src="../../images/5.jpg" /> },
  { image: <Image src="../../images/6.jpg" /> },
];

export const portfolioSecond = [
  { image: <Image src="../../images/8.jpg" /> },
  { image: <Image src="../../images/9.jpg" /> },
  { image: <Image src="../../images/10.jpg" /> },
  { image: <Image src="../../images/11.jpg" /> },
  { image: <Image src="../../images/12.jpg" /> },
];
