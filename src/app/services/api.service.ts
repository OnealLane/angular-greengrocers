import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';

@Injectable({
    providedIn: 'root',
})
export class apiService {

    constructor(private _http: HttpClient) { }



    getItems() {
        return this._http.get(`${environment.apiUrl}`)
    }
}