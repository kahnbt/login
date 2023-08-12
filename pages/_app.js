import { FileProvider } from '../context/FileProvider';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';
import Layout from '@/src/layout/layout';

function MyApp({ Component, pageProps }) {
	return (
		<Provider session={pageProps.session}>
			<FileProvider>
					<ChakraProvider>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</ChakraProvider>
			</FileProvider>
		</Provider>
	);
}

export default MyApp;
