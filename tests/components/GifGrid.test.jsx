import { render , screen} from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import {useFetchGifs} from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');
describe('Pruebas en <GifGrid/>', () => { 

    const category='One Punch';

    test('debe mostrar el loading inicialmente', () => { 

        useFetchGifs.jest.mock({
         images:[],
            isLoading:false 
        });
        
        render(<GifGrid category={category}/>);
        expect (screen.getByText('Cargando...'));
        expect(screen.getByText(category));


     });

    test('debe mostrar items mientras se cargan las imagenes', () => { 

        // useFetchGifs.mockReturnValue({
        //     images:[],
        //     isLoading:true 
        //  });
         
        //  render(<GifGrid category={category}/>);

     })


 });