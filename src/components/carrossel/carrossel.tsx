import carros1 from '../../assets/cardsCarros/carro1.png';
import carros2 from '../../assets/cardsCarros/carro2.png';
import carros3 from '../../assets/cardsCarros/carro3.png';
import carros4 from '../../assets/cardsCarros/carro4.png';
import carros5 from '../../assets/cardsCarros/carro5.png';
import carros6 from '../../assets/cardsCarros/carro6.png';
import carros7 from '../../assets/cardsCarros/carro7.png';
import carros8 from '../../assets/cardsCarros/carro8.png';
import carros9 from '../../assets/cardsCarros/carro9.png';

import CardCarro from '../cards-carro/cardCarro';

import { CalendarDays, Gauge, Users, Zap } from 'lucide-react';

export default function Carrossel() {
  return (
    <div className='w-full h-screen flex space-x-20'>
      <CardCarro imagem={carros1} modelo='Mustang' ano={2015} iconeAno={CalendarDays} km={'180 km/h'} iconeKm={Gauge} potencia={'9/10'} iconePotencia={Zap} pontuacao='8/10' iconePontuacao={Users} />

      <CardCarro imagem={carros2} modelo='Mustang' ano={2015} iconeAno={CalendarDays} km={'180 km/h'} iconeKm={Gauge} potencia={'9/10'} iconePotencia={Zap} pontuacao='8/10' iconePontuacao={Users} />

      <CardCarro imagem={carros3} modelo='Mustang' ano={2015} iconeAno={CalendarDays} km={'180 km/h'} iconeKm={Gauge} potencia={'9/10'} iconePotencia={Zap} pontuacao='8/10' iconePontuacao={Users} />

      {/* <CardCarro imagem={carros4} modelo='Mustang' ano={2015} iconeAno={CalendarDays} km={'180 km/h'} iconeKm={Gauge} potencia={'9/10'} iconePotencia={Zap} pontuacao='8/10' iconePontuacao={Users} />

      <CardCarro imagem={carros5} modelo='Mustang' ano={2015} iconeAno={CalendarDays} km={'180 km/h'} iconeKm={Gauge} potencia={'9/10'} iconePotencia={Zap} pontuacao='8/10' iconePontuacao={Users} />

      <CardCarro imagem={carros6} modelo='Mustang' ano={2015} iconeAno={CalendarDays} km={'180 km/h'} iconeKm={Gauge} potencia={'9/10'} iconePotencia={Zap} pontuacao='8/10' iconePontuacao={Users} />

      <CardCarro imagem={carros7} modelo='Mustang' ano={2015} iconeAno={CalendarDays} km={'180 km/h'} iconeKm={Gauge} potencia={'9/10'} iconePotencia={Zap} pontuacao='8/10' iconePontuacao={Users} />

      <CardCarro imagem={carros8} modelo='Mustang' ano={2015} iconeAno={CalendarDays} km={'180 km/h'} iconeKm={Gauge} potencia={'9/10'} iconePotencia={Zap} pontuacao='8/10' iconePontuacao={Users} />

      <CardCarro imagem={carros9} modelo='Mustang' ano={2015} iconeAno={CalendarDays} km={'180 km/h'} iconeKm={Gauge} potencia={'9/10'} iconePotencia={Zap} pontuacao='8/10' iconePontuacao={Users} /> */}
    </div>
  );
}
