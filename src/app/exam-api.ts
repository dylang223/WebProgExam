import { Injectable } from '@angular/core';
import { Countries } from './countries/countries';
import { Component,signal,Input,Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExamApi {
  public countries = signal<Countries[]>([]);
  private _baseUrl ="https://restcountries.com/v3.1/"

  getCoutries(name:string){
    const url = this._baseUrl + "all?" +"fields="+"name,"+"flag,"+"capital";  
  }
}
