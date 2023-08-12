import { FileProvider } from '../context/FileProvider';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';
import { CacheProvider } from '@chakra-ui/react';
import Layout from '@/components/layout/layout';

function MyApp({ Component, pageProps }) {
	return (
		<Provider session={pageProps.session}>
			<FileProvider>
				<CacheProvider>
					<ChakraProvider>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</ChakraProvider>
				</CacheProvider>
			</FileProvider>
		</Provider>
	);
}

export default MyApp;
