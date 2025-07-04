/**
 * Copyright 2013-2025 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { FieldAll } from '../../base-application/field-all.js';
import type { RelationshipAll } from '../../base-application/relationship-all.js';
import type { EntityAll } from '../../base-application/entity-all.js';
import type { RelationshipWithEntity } from '../../base-application/types.js';

export const isClientField = (field: FieldAll) => !field.skipClient;

export const isClientRelationship = (rel: RelationshipWithEntity<RelationshipAll, EntityAll>) =>
  !!(rel.skipClient ?? !(rel.persistableRelationship || rel.relationshipEagerLoad || (rel.otherEntity as any)?.jpaMetamodelFiltering));

/**
 * Clone entity properties for frontend templates.
 * To be used in writing operations.
 */
export const filterEntityPropertiesForClient = (entity: EntityAll): EntityAll => ({
  ...entity,
  fields: entity.fields.filter(field => isClientField(field)),
  relationships: entity.relationships.filter(rel => isClientRelationship(rel)),
});

/**
 * Filter entities for frontend templates.
 */
export const filterEntitiesForClient = (entities: EntityAll[]): EntityAll[] => entities.filter(entity => !entity.skipClient);

/**
 * Filter entities and properties for frontend templates.
 */
export const filterEntitiesAndPropertiesForClient = (entities: EntityAll[]): EntityAll[] =>
  entities.filter(entity => !entity.skipClient).map(filterEntityPropertiesForClient);
