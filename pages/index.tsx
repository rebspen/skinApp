import type { NextPage } from "next";
import Head from "next/head";
import getProducts from "./api/products";
import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "@prisma/client";
import Link from "next/link";
import User from "../components/User";
import Search from "../components/Search";
import { useState, useCallback, useEffect, ChangeEvent } from "react";

interface Props {
  products: Product[];
}

const Home: NextPage<Props> = (props) => {
  const [items, setItems] = useState<Product[]>(props.products);
  const [latestSearch, setLatestSearch] = useState<string>("");
  const [hasIngredient, setHasIngredient] = useState<boolean>(true);

  useEffect(() => {
    search(latestSearch);
  }, [hasIngredient]);

  const search = useCallback(
    (search: string): void => {
      const list = props.products.reduce((acc: Product[], product) => {
        product.ingredients.map((i: string) => {
          if (i.toLowerCase() === search) {
            acc.push(product);
          }
        });
        return acc;
      }, []);

      const withoutList = props.products.filter((product) => {
        let hasIng = false;
        product.ingredients.map((i: string) => {
          if (i.toLowerCase() === search) {
            hasIng = true;
          }
        });
        return hasIng ? null : product;
      });

      if (list.length === 0 && !search) {
        setItems(props.products);
      } else if (!hasIngredient) {
        setItems(withoutList);
      } else {
        setItems(list);
      }
    },
    [hasIngredient, props.products]
  );

  return (
    <div>
      <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10 flex justify-center flex-col items-center">
        <h1 className="text-5xl">Products Page</h1>
        <User />
        <Search setLatestSearch ={setLatestSearch} setHasIngredient={setHasIngredient} search={search} hasIngredient={hasIngredient}/>
        <div className="p-10 flex flex-wrap">
          {items.map((product, idx) => {
            return (
              <div
                key={idx}
                className="bg-beige p-5 mr-7 mb-7 rounded-lg cursor-pointer drop-shadow-md hover:drop-shadow-lg"
              >
                <Link href={`/product/${product.id}`}>{product.name}</Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse<Product[]>;
}) {
  const products = await getProducts(req, res);
  return {
    props: { products },
  };
}

export default Home;
