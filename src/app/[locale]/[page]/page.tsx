import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { use } from "react";
import { getPageByFilename } from "src/data/pages";
import { PageContentContainer } from "../(components)/PageContentContainer";
import { useTranslations } from "next-intl";
import * as ArticleCard from "@ui/ArticleCard/ArticleCard";
import { FeaturedArticleCard } from "@ui/ArticleCard/FeaturedArticleCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  UnorderedList,
  OrderedList,
  ListItem,
} from "../../../libs/chakra-ui";

export interface Props {
  readonly params: {
    readonly locale: string;
    readonly page: string;
  };
}

export default function Page({ params }: Props): JSX.Element {
  const t = useTranslations();
  const { title, MDXContent } = use(
    getPageByFilename(params.page, params.locale)
  );
  console.log(params);

  return (
    <PageContentContainer>
      <Breadcrumb separator="->">
        <BreadcrumbItem>
          <BreadcrumbLink fontSize="sm" href="#">
            Parent
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink fontSize="sm" href="#">
            {params.page}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <>
        <MDXContent
          components={{
            h2: (props) => <Heading as="h2" variant="h2" {...props} />,
            h3: (props) => (
              <Heading
                color="heading-navy-fg"
                pb={4}
                as="h3"
                variant="h3"
                {...props}
              />
            ),
            h4: (props) => <Heading as="h4" variant="h4" {...props} />,
            h5: (props) => <Heading as="h5" variant="h4" {...props} />,
            h6: (props) => <Heading as="h6" variant="h6" {...props} />,
            p: (props) => <Text py={2} variant="baseRegular" {...props} />,
            ul: (props) => <UnorderedList pl={1} {...props} />,
            ol: (props) => <OrderedList pl={1} {...props} />,
            li: (props) => <ListItem {...props} />,
          }}
        />
      </>
    </PageContentContainer>
  );
}
