import { useState, useEffect } from "react";
import { Button, Text } from "components/atoms";
import { useHistory } from "react-router-dom";
import { DRONES, PLATFORMS } from "api/mock";
import { Header, Footer, Section, GridRow, FlexColumn } from "components/base";
import {
  Dropdown,
  UserMenu,
  TableHeader,
  Table,
  Modal,
  Input,
  Select,
} from "components/molecules";
import { Formik } from "formik";
import { DeliverySchema } from "schemas/delivery";
import { Delivery, Column } from "types";
import { useModal } from "hooks";
import { getDeliveries, saveDelivery } from "api/deliveries.api";

export const Main = () => {
  const history = useHistory();
  const [deliveries, setDeliveries] = useState<Array<Delivery>>([]);
  const [search, setSearch] = useState<string>("");

  const onSearch = (v: string) => {
    setSearch(v);
  };

  const filteredDeliveries = deliveries.filter((d: Delivery) => {
    if (!search) return true;

    if (
      d.order_id.toUpperCase().includes(search.toUpperCase()) ||
      d.technician.toUpperCase().includes(search.toUpperCase()) ||
      d.platform.toUpperCase().includes(search.toUpperCase()) ||
      d.drone.toUpperCase().includes(search.toUpperCase())
    ) {
      return true;
    }

    return false;
  });

  const { show, showModal, hideModal } = useModal();

  const columns: Column[] = [
    { title: "Status", key: "status" },
    { title: "Order ID", key: "order_id" },
    { title: "Technician", key: "technician" },
    { title: "Platform", key: "platform" },
    { title: "Drone", key: "drone" },
    { title: "Technical Check", key: "technical_check" },
  ];

  const fetchDeliveries = async () => {
    const data = await getDeliveries();
    setDeliveries(data);
  };

  useEffect(() => {
    fetchDeliveries();
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          order_id: "",
          technician: "",
          platform: PLATFORMS[0].platform,
          drone: DRONES[0].drone,
        }}
        validationSchema={DeliverySchema}
        onSubmit={async (values, formik) => {
          // same shape as initial values
          await saveDelivery({
            ...values,
            technical_check: "passed",
            status: "ready",
          });
          hideModal();
          fetchDeliveries();
          formik.resetForm({});
        }}
      >
        {({ errors, touched, handleSubmit, setFieldValue }) => (
          <Modal
            show={show}
            title="New delivery"
            closeModal={() => hideModal()}
            body={
              <>
                <Text>
                  Please select the order ID and a technician to deploy the
                  cargo. All elements are mandatory.
                </Text>
                <FlexColumn>
                  <GridRow>
                    <Input
                      placeholder="Order ID"
                      name="order_id"
                      errors={
                        errors.order_id && touched.order_id
                          ? errors.order_id
                          : undefined
                      }
                    />
                    <Input
                      placeholder="Technician"
                      name="technician"
                      errors={
                        errors.technician && touched.technician
                          ? errors.technician
                          : undefined
                      }
                    />
                  </GridRow>
                  <GridRow>
                    <Select
                      placeholder="Platform"
                      options={PLATFORMS.map((p: any) => ({
                        key: p.platform,
                        value: p.platform,
                      }))}
                      onChange={(value: string) =>
                        setFieldValue("platform", value)
                      }
                    />
                    <Select
                      placeholder="Drone"
                      options={DRONES.map((p: any) => ({
                        key: p.drone,
                        value: p.drone,
                      }))}
                      onChange={(value: string) =>
                        setFieldValue("drone", value)
                      }
                    />
                  </GridRow>
                </FlexColumn>
              </>
            }
            footer={
              <>
                <Button secondary onClick={() => hideModal()}>
                  Cancel
                </Button>
                <Button type="submit" onClick={() => handleSubmit()}>
                  Create new delivery
                </Button>
              </>
            }
          />
        )}
      </Formik>
      <Header>
        <UserMenu />
      </Header>
      <Section>
        <TableHeader
          search={search}
          onSearch={onSearch}
          primaryAction="New delivery"
          onPrimaryAction={() => showModal()}
        />
        <Table
          data={filteredDeliveries}
          columns={columns}
          rowKey="id"
          rowActions={(delivery: Delivery) => (
            <>
              <Button
                onClick={() => history.push(`/${delivery.id}`)}
                secondary
                icon="fa fa-layer-group"
              >
                Details
              </Button>
              <Dropdown
                options={[
                  {
                    label: "Edit",
                    onClick: () => {},
                  },
                  {
                    label: "Remove",
                    onClick: () => {},
                  },
                ]}
              />
            </>
          )}
        />
        {!filteredDeliveries.length && <>No results</>}
      </Section>
      <Footer />
    </>
  );
};
