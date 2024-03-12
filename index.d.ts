import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerInTheCardsCharacter = {
  readonly Id: string;
  readonly ancestry?: string | null;
  readonly background?: string | null;
  readonly burn?: (string | null)[] | null;
  readonly currentHealth?: number | null;
  readonly deck?: (string | null)[] | null;
  readonly discard?: (string | null)[] | null;
  readonly equippedArmor?: string | null;
  readonly equippedWeapons?: (string | null)[] | null;
  readonly hand?: (string | null)[] | null;
  readonly hasShield?: boolean | null;
  readonly healingRate?: number | null;
  readonly health?: number | null;
  readonly inventory?: (string | null)[] | null;
  readonly level?: number | null;
  readonly movement?: number | null;
  readonly name?: string | null;
  readonly ownerEmail: string;
  readonly skills?: (string | null)[] | null;
  readonly specialtyClassOne?: string | null;
  readonly specialtyClassTwo?: string | null;
  readonly starterClass?: string | null;
  readonly traits?: string | null;
}

type LazyInTheCardsCharacter = {
  readonly Id: string;
  readonly ancestry?: string | null;
  readonly background?: string | null;
  readonly burn?: (string | null)[] | null;
  readonly currentHealth?: number | null;
  readonly deck?: (string | null)[] | null;
  readonly discard?: (string | null)[] | null;
  readonly equippedArmor?: string | null;
  readonly equippedWeapons?: (string | null)[] | null;
  readonly hand?: (string | null)[] | null;
  readonly hasShield?: boolean | null;
  readonly healingRate?: number | null;
  readonly health?: number | null;
  readonly inventory?: (string | null)[] | null;
  readonly level?: number | null;
  readonly movement?: number | null;
  readonly name?: string | null;
  readonly ownerEmail: string;
  readonly skills?: (string | null)[] | null;
  readonly specialtyClassOne?: string | null;
  readonly specialtyClassTwo?: string | null;
  readonly starterClass?: string | null;
  readonly traits?: string | null;
}

export declare type InTheCardsCharacter = LazyLoading extends LazyLoadingDisabled ? EagerInTheCardsCharacter : LazyInTheCardsCharacter

export declare const InTheCardsCharacter: (new (init: ModelInit<InTheCardsCharacter>) => InTheCardsCharacter)

