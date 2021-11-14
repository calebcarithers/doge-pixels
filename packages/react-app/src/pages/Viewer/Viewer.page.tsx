import React, {Suspense, useCallback, useMemo} from "react";
import {Box, Flex, Grid, GridItem} from "@chakra-ui/react";
import Typography, {TVariant} from "../../DSL/Typography/Typography";
import ThreeScene from "./ThreeScene";
import ViewerStore from "./Viewer.store";
import {observer} from "mobx-react-lite";
import Button from "../../DSL/Button/Button";
import MintPixelsModal from "./MintPixelsModal";
import Pane from "../../DSL/Pane/Pane";

export type onPixelSelectType = (x: number, y: number, pixelPosition: THREE.Vector3) => void;

const ViewerPage = observer(function ViewerPage() {
  const store = useMemo(() => new ViewerStore(), []);

  const onPixelSelect: onPixelSelectType = useCallback((x: number, y: number, pixelPosition: THREE.Vector3) => {
    store.pixelX = x;
    store.pixelY = y;
    store.selectedPixel = pixelPosition;
  }, []);

  const onPixelClear = useCallback(() => {
    store.clearPixelPosition();
  }, []);

  return (
    <>
      <Grid templateColumns={"2fr 1fr"} flexGrow={1}>
        <GridItem mr={5}>
          <Pane w={"100%"} h={"100%"}>
            <Suspense fallback={"Loading Kobosu..."}>
              <ThreeScene onPixelSelect={onPixelSelect} onPixelClear={onPixelClear} />
            </Suspense>
          </Pane>
        </GridItem>
        <GridItem ml={5}>
          <Pane p={3} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} h={"100%"}>
            <Box>
              <Typography variant={TVariant.Title22} mb={1} block>
                Own the Doge
              </Typography>

              <Typography variant={TVariant.Body12} block>
                Look. Closer. Closer! Can you see it? A piece of the pupper picture for your pocket. A colored square with your name on it. A portal to the new paradigm of digital doge ownership.
              </Typography>
              <Typography variant={TVariant.Body12} mt={4} block>
                Kabosu doesn’t speak much Japanese, let alone English. But I imagine if she could see you now she’d say something like
              </Typography>
              <Typography variant={TVariant.Body12} mt={4} block>
                w o w - look how far we’ve come?
              </Typography>
              <Typography variant={TVariant.Body12} mt={4} block>
                In a sea of dog coins where fortunes are lost and millionaires are minted, one thing remains constant: $DOG is backed. 55,240 DOG = 1 Pixel = 55,240 DOG. Lock DOG to mint pixels, or burn pixels to redeem their fair value in DOG.
              </Typography>
              <Typography variant={TVariant.Body12} mt={4} block>
                If you are reading this, you are early. A minted pixel is a bet on the future, a step in the forward direction, a leap of faith. But chaos begets order. And while there are no guarantees, it's likely that early participants in this journey will be handsomely rewarded down the road.
              </Typography>
              <Typography variant={TVariant.Body12} mt={4} block>
                We’ve said too much. Mint today and become a bleeding edge innovator in fractionalized NFT ownership. Mint today and choose hope over fear.
              </Typography>
            </Box>
            {store.selectedPixel && <PixelPosition store={store} />}
            <Flex justifyContent={"center"} mb={10}>
              <Button onClick={() => (store.isMintModalOpen = true)}>
                Mint Pixels
              </Button>
            </Flex>
          </Pane>
        </GridItem>
      </Grid>
      <MintPixelsModal isOpen={store.isMintModalOpen} onClose={() => (store.isMintModalOpen = false)} />
    </>
  );
});

const PixelPosition = observer(function PixelPosition({ store }: { store: ViewerStore }) {
  return (
    <Box>
      <Flex alignItems={"center"}>
        <Typography variant={TVariant.Body16}>x: {store.pixelX}</Typography>
        <Typography variant={TVariant.Body12} ml={3} color={"purple.50"}>
          ({store.selectedPixel!.x})
        </Typography>
      </Flex>
      <Flex alignItems={"center"}>
        <Typography variant={TVariant.Body16}>y: {store.pixelY}</Typography>
        <Typography variant={TVariant.Body12} ml={3} color={"purple.50"}>
          ({store.selectedPixel!.y})
        </Typography>
      </Flex>
    </Box>
  );
});

export default ViewerPage;
