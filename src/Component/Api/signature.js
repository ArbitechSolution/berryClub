import { ethers } from "ethers";
import { loadWeb3 } from "../Api/api";
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
export const getSignatureTest = async (contract, user) => {
  let sigdataArr = [];
  user = await loadWeb3();
  //   console.log("Acc in signature", user);
  //   console.log("Acc in signature", privateKey);

  contract = "0x8E37ffA5eD617E0764Fb9CEd25485720B8fc7f71"; //BerryClubContract
  // user = "0xAD4f1d02ad3e819AD86D3eD27dfd13F31A19a09a"; //user_address

  const RPC = "https://api.avax-test.network/ext/bc/C/rpc";
  const provider = new ethers.providers.JsonRpcProvider(RPC);
  const blockNumber = await provider.getBlockNumber();

  const nonce = (await provider.getBlock(blockNumber)).timestamp;
  console.log("nonce-timestamp:", nonce);
  sigdataArr.push(nonce);

  let hash = ethers.utils.solidityKeccak256(
    ["string", "string", "uint256"],
    [contract.toLowerCase(), user.toLowerCase(), nonce]
  );
  console.log("hash:", hash);

  // 0x7A2c3552006A39926f576f8568984b3834Cc2E49 - signer address

  const signingKey = new ethers.utils.SigningKey(privateKey);
  let deployTx = signingKey.signDigest(hash);

  const signature = ethers.utils.joinSignature(deployTx);
  console.log("Signature:", signature);
  sigdataArr.push(signature);
  console.log("sigdataArr", sigdataArr);
  return sigdataArr;
};

//Owneraddress: 0x9f8a3E2E04413Ad46e8453EF94CAa0b919289608
//onwerpk: 608f2574f42225d9d673f0944e3f136dc2db45fb2e8f3b39196b0a3a63d462cd

//signeraddress: 0xef464C463D76902b1a92C2d45bcc3F142b5d18E3
//signerpk: cea4bd3152e222ff68dce66db009eb614f568fd148370885eaf86568c949f664
