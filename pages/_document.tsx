import { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import {
    DocumentHeadTags,
    documentGetInitialProps,
} from '@mui/material-nextjs/v14-pagesRouter';
export default function Document(props: DocumentContext) {
    return (
        <Html>
            <Head>
                <DocumentHeadTags emotionStyleTags={[]} {...props} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

Document.getInitialProps = async (ctx: DocumentContext) => {
    const finalProps = await documentGetInitialProps(ctx);
    return finalProps;
};