import { Mongo } from 'meteor/mongo';

export const DBAds = new Mongo.Collection('ads');
DBAds.allow({
    insert:function(){
        return true;
    },
    update:function(){
        return true;
    },
    remove:function(){
        return true;
    }
});
