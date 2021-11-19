import { observer } from "mobx-react-lite";
import { useEffect, useMemo } from "react";
import Modal, { ModalProps } from "../../../DSL/Modal/Modal";
import Typography, { TVariant } from "../../../DSL/Typography/Typography";
import MintPixelsModalStore, { MintModalView } from "./MintPixelsModal.store";
import Button, { ButtonVariant } from "../../../DSL/Button/Button";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Form from "../../../DSL/Form/Form";
import NumberInput from "../../../DSL/Form/NumberInput/NumberInput";
import { maxValue, minValue, required } from "../../../DSL/Form/validation";
import model from "../../../DSL/Form/model";
import AppStore from "../../../store/App.store";
import Dev from "../../../common/Dev";
import Submit from "../../../DSL/Form/Submit";

interface MintPixelsModalProps extends Pick<ModalProps, "isOpen" | "onClose"> {}

const MintPixelsModal = observer(function MintPixelsModal({ isOpen, onClose }: MintPixelsModalProps) {
  const store = useMemo(() => new MintPixelsModalStore(), [isOpen]);
  useEffect(() => {
    if (isOpen) {
      store.init()
    }
  }, [isOpen])
  return (
    <Modal
      size={"xl"}
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}
      renderHeader={() => <Typography variant={TVariant.ComicSans28}>Mint Pixels</Typography>}
    >
      {store.showGoBack && store.currentView === MintModalView.Approval && <Button
        p={0}
        mb={2}
        display={"inline-flex"}
        justifyContent={"flex-start"}
        variant={ButtonVariant.Text}
        onClick={() => store.popNavigation()}
      >
        &#8592;
      </Button>}
      {store.currentView}
      {store.currentView === MintModalView.Mint && <MintForm store={store} />}
      {store.currentView === MintModalView.Approval && <Approval store={store} />}
      {store.currentView === MintModalView.Loading && <Loading />}
      {store.currentView === MintModalView.Complete && <Complete />}
    </Modal>
  );
});

const MintForm = observer(({ store }: { store: MintPixelsModalStore }) => {
  return (
    <>
      <Box>
        <Typography variant={TVariant.ComicSans14}>
          Trade your $DOG for pixels. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </Typography>
      </Box>
      <Form onSubmit={(data) => store.handleMintSubmit(data.pixel_count)}>
        <Grid templateColumns={"repeat(2, 1fr)"} mt={5}>
          <GridItem colSpan={1} mr={3}>
            <NumberInput
              label={"Pixels"}
              validate={[
                required,
                minValue(1, "You mint at least one pixel ser"),
                maxValue(store.maxPixelsToPurchase, "Must buy more $DOG")
              ]}
              {...model(store, "pixel_count")}
              stepper
            />
          </GridItem>
          <GridItem colSpan={1} ml={3}>
            <NumberInput
              label={"$DOG"}
              validate={[
                maxValue(AppStore.web3.dogBalance, "Not enough dog")
              ]}
              {...model(store, "dog_count")}
              isDisabled={true}
            />
            <Dev>
              <Typography mt={3} block variant={TVariant.ComicSans14}>
                  $DOG available: {AppStore.web3.dogBalance! / 10 ** AppStore.web3.D20_PRECISION}
              </Typography>
            </Dev>
          </GridItem>
        </Grid>
        <Submit label={"Mint"} w={"100%"} mt={10} />
      </Form>
      <Dev>
        <Flex direction={"column"}>
          {store.pixel_count !== undefined && <Typography variant={TVariant.ComicSans16}>
              to spend: {(store.pixel_count * AppStore.web3.DOG_TO_PIXEL_SATOSHIS) / 10 ** AppStore.web3.D20_PRECISION}
          </Typography>}
          {store.allowance !== undefined && <Typography variant={TVariant.ComicSans16}>
              allowance: {store.allowance / 10 ** AppStore.web3.D20_PRECISION}
          </Typography>}
        </Flex>
      </Dev>
    </>
  );
});

const Approval = observer(function Approval({store}: {store: MintPixelsModalStore}) {
  return (
    <Box>
      <Typography variant={TVariant.ComicSans16}>Please approve $DOG</Typography>

      <Flex justifyContent={"center"} alignItems={"center"} w={"full"} h={"full"}>
        <Typography display={"block"} variant={TVariant.PresStart28} mt={8}>
          {store.allowanceToGrant / (10 ** AppStore.web3.D20_PRECISION)} $DOG
        </Typography>
      </Flex>
        <Form onSubmit={async () => {
          await store.handleApproveSubmit(store.allowanceToGrant)
        }}>
          <Flex mt={14} justifyContent={"center"}>
            <Submit label={"Approve"}/>
          </Flex>
        </Form>
    </Box>
  );
});

const Loading = () => {
  return (
    <Box>
      <Typography variant={TVariant.ComicSans12}>
        <Loading/>
      </Typography>
    </Box>
  );
};

const Complete = () => {
  return <Box>
      <Typography variant={TVariant.ComicSans12}>✨ Mint complete ✨</Typography>
  </Box>
}

export default MintPixelsModal;