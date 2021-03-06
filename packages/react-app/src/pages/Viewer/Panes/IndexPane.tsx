import ViewerStore from "../Viewer.store";
import {Box, Flex, Grid, GridItem} from "@chakra-ui/react";
import Typography, {TVariant} from "../../../DSL/Typography/Typography";
import AppStore from "../../../store/App.store";
import React from "react";
import {observer} from "mobx-react-lite";
import MintBurnButtons from "../MintBurnButtons";
import Link from "../../../DSL/Link/Link";
import {getEtherscanURL} from "../../../helpers/links";
import {Type} from "../../../DSL/Fonts/Fonts";

const IndexPane = observer(function IndexPane({store}: {store: ViewerStore}) {
  return  <>
    <Flex flexDirection={"column"} flexGrow={0} h={"100%"}>
      <Box overflowY={"auto"} flexGrow={1} h={"full"} mt={4}>
        <Box maxHeight={"300px"}>
          <Typography variant={TVariant.ComicSans18} block>
            Welcome to the Doge Pixel Portal - your gateway to fractionalized ownership of <Link
              size={"lg"}
              variant={Type.ComicSans}
              href={"https://fractional.art/vaults/0xbaac2b4491727d78d2b78815144570b9f2fe8899"}
              isExternal
              fontWeight={"bold"}
          >
            The Doge NFT
          </Link>.
          </Typography>
          <Typography variant={TVariant.ComicSans18} block mt={6}>
            This site has two main functions.
          </Typography>
          <Grid templateColumns={"0.1fr 1fr"} mt={2}>
            <GridItem>
              <Typography variant={TVariant.ComicSans18} block>
                1.
              </Typography>
            </GridItem>
            <GridItem>
              <Typography variant={TVariant.ComicSans18} block>
                Lock $DOG to mint Doge Pixels (PX).
              </Typography>
            </GridItem>
            <GridItem>
              <Typography variant={TVariant.ComicSans18} block>
                2.
              </Typography>
            </GridItem>
            <GridItem>
              <Typography variant={TVariant.ComicSans18} block>
                Burn PX to redeem their fair value in DOG (minus 1% fee for future development)
              </Typography>
            </GridItem>
          </Grid>

          <Typography variant={TVariant.ComicSans18} block mt={6}>
            $DOG is backed. 55,240 $DOG = 1 PX. Here's the math on that calculation:
          </Typography>

          <Box mt={6}>
            <Typography variant={TVariant.ComicSans18} block>
              Total supply of $DOG  = 16,969,696,969
            </Typography>
            <Typography variant={TVariant.ComicSans18} block>
              Total supply of PX =  307,200
            </Typography>
            <Typography variant={TVariant.ComicSans18} block>
              $DOG / PX = 55,239.89899
            </Typography>
          </Box>

          <Typography variant={TVariant.ComicSans18} block mt={8} display={"inline-block"} alignItems={"flex-end"}>
            Its dangerous to go alone! Take
            <Box display={"inline-flex"} alignItems={"flex-end"} ml={"4px"}>
              <Link
                size={"lg"}
                variant={Type.ComicSans}
                href={getEtherscanURL(AppStore.web3.dogContractAddress, "address")}
                isExternal
                fontWeight={"bold"}
              >
                this
              </Link>
            </Box>
          </Typography>
        </Box>
      </Box>
    </Flex>
    <Box mt={10}>
      <MintBurnButtons store={store}/>
    </Box>
  </>
})

export default IndexPane;