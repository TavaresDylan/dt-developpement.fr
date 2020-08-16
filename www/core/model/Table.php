<?php
namespace Core\Model;

use \Core\Controller\Database\DatabaseController;

abstract class Table
{
    protected $db;

    protected $table;

    public function __construct(DatabaseController $db)
    {
        $this->db = $db;

        if (is_null($this->table)) {
            $this->table = $this->extractTableName();
        }
    }
    
    // Fonction qui extrait le nom de la table 
    public function extractTableName(): string
    {
            //App\Model\Table\MotMotMotusTable
            $parts = explode('\\', get_class($this));
            // [ "App", "Model", "Table", "MotMotMotusTable" ]
            $class_name = end($parts);
            //MotMotMotusTable
            $class_name = str_replace('Table', '', $class_name);
            
            $class_name = getenv('TABLE_PREFIX').lcfirst($class_name);
            
            //MotMotMotus
            $newTable = $class_name[0];
            // $newTable = M
        for ($i=1; $i < strlen($class_name); $i++) {
            if (ctype_upper($class_name[$i])) {
                $newTable .= "";
            }
                $newTable .= $class_name[$i];
        }
            // $newTable =  Mot_Mot_Motus

            $class_name = strtolower($newTable);
            // $newTable =  mot_mot_motus
            return $class_name;
    }

    // Fonction qui compte et selectionne le nombre de ligne dans une table
    public function count()
    {
        return $this->query("SELECT COUNT(id) as nbrow FROM {$this->table}", null, true, null);
    }

    // Fonction qui selectionne le dernier id de la table
    public function last()
    {
        return $this->query("SELECT MAX(id) as lastId FROM {$this->table}", null, true)->lastId;
    }

    // Focntion qui recherche une ligne d'une table selon un id donné
    public function find($id, $column = 'id')
    {
        return $this->query("SELECT * FROM {$this->table} WHERE $column=?", [$id], true);
    }

    // Focntion qui recherche une ligne d'une table selon un id donné
    public function findAll($id, $column = 'id')
    {
        return $this->query("SELECT * FROM {$this->table} WHERE $column=?", [$id]);
    }

    // Fonction qui selectionne la totalité de la table
    public function all()
    {
        return $this->query("SELECT * FROM $this->table");
    }

    /**
     * lecture de tous les enregistrement d'une table par page
     */
    public function allByLimit(int $limit, int $offset)
    {
        return $this->query("SELECT * FROM {$this->table} LIMIT {$limit} OFFSET {$offset}");
    }

    public function create($fields, $class = false)
    {
        // Définition de tableau vide , recoit des tableaux sql
        $sql_parts = [];
        $attributes = [];
        // Condition si la variable class est égale à false
        if ($class) {
            // Récupère les methodes de la classe
            $methods = get_class_methods($fields);
            $array = [];
            // Boucle sur les méthodes 
            foreach ($methods as $value) {
                if (strrpos($value, 'get') === 0) {
                    $column = strtolower(explode('get', $value)[1]);
                    $array[$column] = $fields->$value();
                }
            }
            $fields = $array;
        }
        foreach ($fields as $k => $v) {
            $sql_parts[] = "$k = ?";
            $attributes[] = $v;
        }
        $sql_part = implode(', ', $sql_parts);
        return $this->query("INSERT INTO {$this->table} SET $sql_part", $attributes, true);
    }

    

    public function update($id, $column, $fields)
    {
        $sql_parts = [];
        $attributes = [];
        foreach ($fields as $k => $v) {
            $sql_parts[] = "$k = ?";
            $attributes[] = $v;
        }
        $attributes[] = $id;
        $sql_part = implode(', ', $sql_parts);
    return $this->query("UPDATE {$this->table} SET $sql_part WHERE $column = ?", $attributes/*, true*/);
    }

    // Fonction pour supprimer une une ligne d'une table selon l'id donné
    public function delete($id)
    {
        return $this->query("DELETE FROM {$this->table} WHERE id = ?", [$id], true);
    }

    public function query(string $statement, ?array $attributes = null, bool $one = false, ?string $class_name = null)
    {
        if (is_null($class_name)) {
            $class_name = str_replace('Table', 'Entity', get_class($this));
        }

        if ($attributes) {
            return $this->db->prepare(
                $statement,
                $attributes,
                $class_name,
                $one
            );
        } else {
            return $this->db->query(
                $statement,
                $class_name,
                $one
            );
        }
    }
}
