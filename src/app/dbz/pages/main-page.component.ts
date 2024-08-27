import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent   {

  constructor(private dbzService: dbzService) {}

    get characters(): Character[] {
      return [...this.dbzService.characters];
    }

    onDeleteCharacter(id: string): void {
      this.dbzService.deleteCharacterById(id)
    }

    onNewCharacter(character: Character): void {
      this.dbzService.addCharacter(character)
    }

}



