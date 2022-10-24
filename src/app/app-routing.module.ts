import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { RecipeComponent } from "./recipes/recipe/recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list/shopping-list.component";

    const appRoutes: Routes = [
        { path: '', redirectTo: '/recipes', pathMatch: 'full'},
        { path: 'recipes', component: RecipeComponent},
        { path: 'shopping-list', component: ShoppingListComponent},
    ];
    
    @NgModule({
        imports: [RouterModule.forRoot(appRoutes) ],// <- const name ], 
        exports: [RouterModule]
        })
        export class AppRoutingModule {
        }
        