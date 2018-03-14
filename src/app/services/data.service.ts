import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export abstract class DataService {
    abstract read(collection: string): Observable<any>;
    abstract update();
    abstract create();
    abstract delete();
}

@Injectable()
export class FirestoreDataService extends DataService {

    constructor(
        private angularFirestore: AngularFirestore
    ) {
        super();
    }

    read(collectionName): Observable<any> {
        return this.angularFirestore.collection(collectionName)
        .snapshotChanges()
        .map(this.retrieveDataWithId);
    }

    update() {

    }

    create() {

    }

    delete() {

    }

    private retrieveDataWithId(item: DocumentChangeAction[]){
      return item.map(
            action => {
                const data = action.payload.doc.data();
                const id = action.payload.doc.id;
                return {id, ...data};
            }
        )
    }
}