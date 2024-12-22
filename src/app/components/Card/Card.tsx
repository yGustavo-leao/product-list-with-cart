import { DataType } from "@/@types/DataType";
import { Banner, BannerContainer, CardContainer, Category, Container, Details, Name, Price } from "./Card.styled";
import { Button } from "./Button/Button";

export const Card = ({ data }: { data: DataType[] }) => {
    return (
        <CardContainer>
            {
                data.map(current =>
                    <Container key={Math.random()}>
                        <BannerContainer>
                            <Banner src={current.image.mobile} alt="Mobile img" />
                            <Button data={current} />
                        </BannerContainer>

                        <Details>
                            <Category>{current.category}</Category>
                            <Name>{current.name}</Name>
                            <Price>{`$${current.price.toFixed(2)}`}</Price>
                        </Details>
                    </Container>
                )
            }
        </CardContainer>
    )
}