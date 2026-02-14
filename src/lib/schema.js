import { collection, getDocs, query, where } from "firebase/firestore";
import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import { GraphQLJSON } from "graphql-type-json";
import { db } from "./firebase.js";

const FirebaseDataType = new GraphQLObjectType({
  name: "WebsiteData",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    data: { type: GraphQLJSON },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: () => ({
    entriesBySchema: {
      type: new GraphQLList(FirebaseDataType),
      args: { schemaName: { type: new GraphQLNonNull(GraphQLString) } },
      resolve: async (_parent, args) => {
        const { schemaName } = args;
        const ref = collection(db, "fl_content");
        const q = query(ref, where("_fl_meta_.schema", "==", schemaName));
        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
      },
    },
  }),
});

export const schema = new GraphQLSchema({ query: RootQuery });
