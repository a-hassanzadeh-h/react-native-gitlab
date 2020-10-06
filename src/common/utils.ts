import {AppState} from '../app/app.model';
import {ParametricSelector, Selector} from '@reduxjs/toolkit';
import { forEach } from 'lodash';

export function selector<R, P = void, S = AppState>(sel: ParametricSelector<S, P, R>):
  (props: P, ...args: any[]) => Selector<S, R> {
  return (props, ...args) => state => sel(state, props, ...args);
}
export function TimeAgo(time: string){
  const periods:string[] = ['second','minute','hour', 'day','week','month','year'];
  const periodsValue: number[] = [1,60,3600,86400,604800,2592000,31536000]
  const secondTime = Date.parse(time)/1000;

  if(isNaN(secondTime)) throw Error('Invalid time format');

  const currentTime = Date.now()/1000;
  
  const diffrent = currentTime - secondTime;
  
  if(diffrent > periodsValue[0] && diffrent < periodsValue[1]) return `Updated ${Math.round(diffrent)} ${periods[0]} ago`;
  if(diffrent > periodsValue[1] && diffrent < periodsValue[2]) return `Updated ${Math.round(diffrent/periodsValue[1])} ${periods[1]} ago`;
  if(diffrent > periodsValue[2] && diffrent < periodsValue[3]) return `Updated ${Math.round(diffrent/periodsValue[2])} ${periods[2]} ago`;
  if(diffrent > periodsValue[3] && diffrent < periodsValue[4]) return `Updated ${Math.round(diffrent/periodsValue[3])} ${periods[3]} ago`;
  if(diffrent > periodsValue[4] && diffrent < periodsValue[5]) return `Updated ${Math.round(diffrent/periodsValue[4])} ${periods[4]} ago`;
  if(diffrent > periodsValue[5] && diffrent < periodsValue[6]) return `Updated ${Math.round(diffrent/periodsValue[5])} ${periods[5]} ago`;
  if(diffrent > periodsValue[6]) return `Updated ${Math.round(diffrent/periodsValue[6])} ${periods[6]} ago`

}