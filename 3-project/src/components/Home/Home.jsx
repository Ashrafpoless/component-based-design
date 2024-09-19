import { useState } from 'react';
import { Header, AsideMenu, Footer, Section, Errors } from '../../components';
import { usePokemonList } from '../../hooks';


export const Home = () => {
    const [selectId, setSelectId] = useState(null);
    const { list, isLoading } = usePokemonList();

    const showSection = selectId || selectId === 0;
    return (
        <>
        <Errors />
        <Header />
        <main className='main'>
            {isLoading ? (
            <p>loading</p>
            ) : (
            <AsideMenu list={list} onIdSelected={(id) => setSelectId(id)} />
            )}
            {showSection && <Section selectedPokemonId={selectId} />}
        </main>
        <Footer />
        </>
    )
}



// export default Home


