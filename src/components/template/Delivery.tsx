import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, Footer, Section } from "components/base";
import { Title } from "components/atoms";
import { UserMenu } from "components/molecules";
import { getDelivery } from "api/deliveries.api";
import { Delivery as DeliveryType } from "types";

export const Delivery = () => {
  let { id } = useParams<{ id: string }>();

  const [delivery, setDelivery] = useState<DeliveryType | null>(null);

  const fetchDelivery = async () => {
    const data = await getDelivery(id);
    setDelivery(data);
  };

  useEffect(() => {
    fetchDelivery();
  }, []);

  return (
    <>
      <Header>
        <UserMenu />
      </Header>
      <Section>
        <Title>Order #{delivery?.order_id ?? "..."}</Title>
      </Section>
      <Footer />
    </>
  );
};
