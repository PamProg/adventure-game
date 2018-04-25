import { TestBed, inject } from '@angular/core/testing';

import { GameEventService } from './game-event.service';

describe('GameEventService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [GameEventService]
        });
    });

    it('should be created', inject([GameEventService], (service: GameEventService) => {
        expect(service).toBeTruthy();
    }));
});
