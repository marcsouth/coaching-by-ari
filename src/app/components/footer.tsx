import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/link" 

export default function footer() {
  return (
    <>
    <footer className="w-full bg-black px-4 mt-10">

        <div className="flex flex-wrap w-full justify-center items-center gap-12 mb-6 ">


          
                <Button href='https://www.tiktok.com/@amwbrah' color="default" isIconOnly   variant="light"   as={Link}>
                <FaTiktok size={25}  />
                </Button>
  


                <Button href='https://www.instagram.com/aesthetics.by.ari/' color="default" isIconOnly   variant="light"   as={Link}>
                <FaInstagram size={30}  />
                </Button>


                <Button href='https://www.youtube.com/@Amwbrah' color="default" isIconOnly   variant="light"   as={Link}>
                <FaYoutube size={30}  />
                </Button>


        </div>

        <div className="flex w-full px-4 max-w-md m-auto items-center justify-evenly mb-6"> 
        <Link color="secondary" isExternal href="https://083950260099-filekit-attachments.s3.us-east-2.amazonaws.com/k7qmjba9sce6s7gl87u9k7ci9t12?response-content-disposition=inline%3B%20filename%3D%22COACHING%20BY%20ARI%20PRIVACY%20POLICY.pdf%22%3B%20filename%2A%3DUTF-8%27%27COACHING%2520BY%2520ARI%2520PRIVACY%2520POLICY.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIARHC6TJ6B2VQOJZNL%2F20240129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240129T075509Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLWVhc3QtMiJHMEUCIQDHG17G3We%2BMn62QhjXuGcHeKkDpBKipLsF7QNr9%2BARTQIgUvNRwwbX9762C8iXJAyeLntPaw46t99dNegkKO3T2V0qlwUI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAEGgwwODM5NTAyNjAwOTkiDCQvfnb9cKX59NqW4SrrBCbjO9YUQyVfKdfew9vUIyH2CQw6wmR9egCd4QHai%2B1cTkKmQa6aKkeEcZxDXXgWK2PNV6MROXzQYf%2FvegFbADXCtAX3010k1wyPavYqxXRJWq24LqUIiTN9QLyidWbnTd3sLKr8deWbEJ%2Flu%2FecaRBsZ8rYtkTyDIhOydPzm797tiTnvA9hu5cwHUwYbCsW9HexCurx3d%2BOwSA3GhLCjXTKvvv0e%2BzXQ3h%2FCpbuUghVqybfz%2F2GDQlUGxDS930x%2BY7swOXDcbVD3vw%2BMMvMCWWePuP3q1heg%2BvU04s8h99%2BasZgDfqTKqbtseGP0FqXDChDxGWu4QI3lJyCP2fBty4tGcc7dWPHf9HeVJYK3RvYpdRAJN%2BpTLLqrQ9iojwQMVIjWyhub2hTfmc0R8xSGreSJW0Dy5oNudfwPrwyfsuJ6bQ%2BGxiCt%2BTZ%2FEGbr%2F7T8UQyd126lGpZY70jl5R1YdRbqTI9Mz7wj9lx0QzLdokn6c6Kud1hZEEHwWpl%2FBvz1mrlq1%2BrEcEYJypCvxZfQALizWOGPnHgn8j4SODBNfhvn57v9PyfkWIni9GtUHK9PUDg9bBgpRsputP5lqRTwlHBwU5KvynQ8X9dhTDU27z4pGDI8n1%2FHDQioteCnlQF8X%2FrLg5B9dbh9yEFHJc8r%2B%2BgCh%2FQsw61aalgbrUFB%2FUr4QR1wm6sGaH36f1c1IIYkYINXqwlBEx25SGPW8L04u3S69t1HQabeSOk2uG13e%2BNbp9kLAVJ05a9%2F7JOgVE5LPAnALYwDwW8aB77ADNx8krTQrTNIHOe%2Fi0GFNpf9odrlxueMK7HZ4QB7MYwuqDdrQY6mgHCotHHEdul%2FINHKDfR74dZgLrKpUJ0%2BMwZBVEAFYwE3dMm%2Fv6hYL2LhTS%2BBx2e%2Bl6bQe5ismkH7leoptotulbA%2FAl%2Fcs%2BY5LBMEDrdXXcPhDfIW2jqCX7QNHBqiPRD%2BKp5jsVbgraGUeNSQN9TDPnPTVHEVELBAAQZcVmvPfN8O0NivTFv4ZjR4BIr9DcwwnFr3suzFktrdepD&X-Amz-SignedHeaders=host&X-Amz-Signature=9b1b257d76218ed1562bbc118ac588099b363a6c9333847ad07c677f0dbef63e">Privacy Policy </Link>
        <Link color="secondary" isExternal href="https://083950260099-filekit-attachments.s3.us-east-2.amazonaws.com/2djqvb5f8af8fb93njb4tysu81jv?response-content-disposition=inline%3B%20filename%3D%22TERMS%20OF%20SERVICE.pdf%22%3B%20filename%2A%3DUTF-8%27%27TERMS%2520OF%2520SERVICE.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIARHC6TJ6BV3PMZNND%2F20240129%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240129T075338Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLWVhc3QtMiJIMEYCIQD8T8Am0Bri3gTz90g%2F3euSJqeYutzoxrRMaLbPRYqEEgIhAPsA%2BU%2BAnNnmyUO47nmftAO1gYKIm%2FpT27yu3IN6akRKKpcFCOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBBoMMDgzOTUwMjYwMDk5IgzZJFqRPbD0l%2FQLS7sq6wToa8%2FjZWipfws90yayug5s8%2F7nCpsnCFGHYHZjTzCB%2FJYva%2FD%2F0mBmHlajl14ixbkZ8ukRQlYyaQS27QUyOjZtY9RRnlxi%2BThzu1uPW%2FCVhIkTeGWTIuiYTZykqqPS%2BgHqU2FspX%2BBefUTH8Fi8%2Fjs06BViW8NP5DeDElaoDA8eoJmzGaQ3vp4Kg5nw4Q6IJBwP0Ao0xc9arhni7OvA61MrmlBDWPc0BzvYQmb5z6fbypKFF9jnH7jiTGRfkWeC6MQEXC%2FPQL2qPMSeuTph%2BVaVVlajBH%2F9yzBcIZGBZlmQIEvtZkmRy03oiDPFDJpWWDJ0LQnzP%2FSlPwyc4KiAm1gHnUM5NgFVjnmMFZYGWwg2s3KofitUFFDZEan90wxjoPoVZbzx5thJYp2NyIEnQ20BdUtGRpn72eufDTszxrL91Gduacl%2B7m1eQQUN9c%2BoFoBIa%2B947tuMSzbl2IqjThV73ZSFyEg7GqBIeHkKZOK8rqyvhnzpJhDAUbJMh8cMLO%2FEAZBovd2F9v7gRBCVna02UwfrMZmI%2Fy4cI7ucMxUNmXUkkzuXqHNqptbZvaQFIGgM4TWbGrsf31NHSnqe%2FxLnP2fZMdsi5duEeiyGdZiuMC8aPtG7%2BaYO50%2BfNLYBHHVdgF0McJ%2BwU6CalDioZsiFHgUsgM5wGD%2B5%2BXRcJ1nCO142p%2FQQ4rZEM2nzob9B5z1rwNYCefe44uy7DMBI8Bxj0Dnf7e5ZF5GKUtV%2FqsasPcH37xx3CSuMUtipMUpyREIWrp92%2FlhTX4siwazxHMzI2iSX3pqagTikUT6%2Bm5OX8VCq3d6iNUFsWBvMMam3a0GOpkBN8%2FX5APTb8oReTJifNJijNkflpcb1odci6Y77O2OoVCOCiucyQ7aXPOt032sP1CPXNcb3OaPcCFAHX15U%2FtrQd7efNiHEyg%2FBKOKFUaiFqYanKsO0l7QcxTV%2F0%2FruDSz0SMfpf3daOQ029yAY9Z8%2B6h16gzKGCY3IqgMhj2Ds5MVHEs%2F%2FYCkRLEIQo1%2F8lhel1uU98JgfDFU&X-Amz-SignedHeaders=host&X-Amz-Signature=46f17a74b6aa05c1dcabcd3ab22f82ba095e27b2a30e46d497984726519f830f">Terms of Service </Link>
        </div>

       <p className="w-full text-gray-400 text-center">Coaching By Ari © 2024</p> 
    </footer>
    </>
  )
}
